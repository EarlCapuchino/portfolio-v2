import styles from '../../styles/blogs/BlogN.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';
import CleanHeader from '../../components/CleanHeader';
import Head from 'next/head';
const markdownContent = `
# / Do Not Use Create React App, Use Vite Instead
### 21 may 2024
Hey everyone! This is Sam! I've been building web applications for five years now. If you're getting into React, you've probably heard of Create React App (CRA). It was, for a long time, the go-to tool for setting up a React project. However, times have changed, and it's time we talked about why you should shift to **Vite**. Which is a little **Vite** better (insert drumroll corny joke banter! HAHA).

## The Sunset of Create React App

CRA was great in its day. It provided a simple, zero-configuration way to get a React application up and running. It handled the heavy lifting of setting up a development environment, like configuring Webpack, Babel, and other tooling. This meant you could focus on writing your React components without getting bogged down in configuration details.

But as web development evolved, CRA started to show its age. Here's a breakdown of the issues:

* **Slow Development Server:** The development server became progressively slower as projects grew in size. This resulted in longer wait times for code changes to reflect in the browser, making the development experience less efficient.
* **Heavy Dependencies:** CRA comes with a lot of dependencies bundled in which can lead to larger project sizes and potential security concerns down the line. It's not very granular in what gets installed, often pulling in more than what is strictly needed.
* **Configuration Complexity:** While CRA aims to be zero-configuration, it's very difficult to customize it. Trying to deviate from its standard setup, such as customizing the webpack configuration, was a challenge. You were essentially locked in to the structure that CRA imposes.
* **No longer actively maintained:** The React team officially announced they are not actively developing CRA and instead are recommending other alternatives. This means there will be little to no updates, bug fixes, or support moving forward.

In short, CRA started to feel like a monolithic, inflexible tool that hindered more than helped. This is where Vite enters the scene.

## Enter Vite: The Modern React Tooling

Vite is a build tool that provides a significantly improved developer experience compared to CRA. It is specifically designed for speed and efficiency. It leverages the power of modern JavaScript features like ESM (ECMAScript Modules) and native browser support to deliver incredibly fast development builds and blazing-fast hot module replacement (HMR).

Here's what makes Vite a superior choice for React development:

* **Extremely Fast Development Server:** Vite uses native ESM, allowing the server to start almost instantaneously. It uses a technique called "on-demand compilation" so it only compiles the code as needed. This results in a far faster refresh in the browser with code changes, even for large applications.
* **Lightning-Fast Hot Module Replacement (HMR):** Vite's HMR is exceptionally quick, providing near-instant feedback when you make changes to your React components. This allows for a more fluid development workflow.
* **Flexible Configuration:** Unlike CRA, Vite is designed to be easily configurable. You can quickly customize the configuration to suit your project's specific needs. You can extend its functionality through its plugin system.
* **Optimized Builds:** Vite produces highly optimized production builds using Rollup, a JavaScript bundler known for its efficiency.
* **Support for Modern JavaScript Features:** Vite natively supports modern JavaScript features such as JSX, TypeScript, and CSS Modules out of the box.

## Setting Up a React Project with Vite: A Step-by-Step Guide

Let's walk through how you can set up a new React project using Vite:

1. **Install Node.js and npm (or yarn/pnpm):** Make sure you have Node.js installed on your machine. npm comes bundled with Node, but you can also choose to use yarn or pnpm instead.

2. **Create a New Vite Project:** Open your terminal and run the following command:
    
    \`\`\`bash
    npm create vite@latest my-react-app --template react
    \`\`\`
    
    This command will create a new directory called \`my-react-app\` and initialize a React project within it using the Vite template. You can replace \`my-react-app\` with the name you want for your project.

    You will be prompted with a few questions. Just press enter to accept the default settings.
    
    You should get a response similar to this:
    
    \`\`\`terminal
    ✔ Project name: … my-react-app
    ✔ Select a framework: › React
    ✔ Select a variant: › JavaScript

    Scaffolding project in /Users/yourusername/Documents/my-react-app...

    Done. Now run:

      cd my-react-app
      npm install
      npm run dev
    \`\`\`

3. **Navigate to the Project Directory:**
    
    \`\`\`bash
    cd my-react-app
    \`\`\`
    
4. **Install Dependencies:**
    
    \`\`\`bash
    npm install
    \`\`\`
    This command will install all the necessary packages for your React project.

    You should see a lot of output that tells you which packages were added. This step might take a few seconds or a minute depending on your internet speed.

    \`\`\`terminal
    added 145 packages, and audited 146 packages in 12s
    
    14 packages are looking for funding
      run \`npm fund\` for details
    
    found 0 vulnerabilities
    \`\`\`

5. **Start the Development Server:**
    
    \`\`\`bash
    npm run dev
    \`\`\`
    
    This command will start the Vite development server. You can access your application in your browser, usually at \`http://localhost:5173\`.

    The output should tell you that the app is now live and ready.
    
    \`\`\`terminal
    VITE v4.5.0  ready in 304 ms

    ➜  Local:   http://localhost:5173/
    ➜  Network: use --host to expose
    \`\`\`

    You should see a default React page in your browser if everything worked correctly.

## Understanding the Project Structure

Let's examine the project structure that Vite provides. Here's a common directory layout:

\`\`\`
my-react-app/
├── node_modules/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   └── HelloWorld.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── vite-env.d.ts
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
\`\`\`

* **\`node_modules/\`**: Contains all the project dependencies.
* **\`public/\`**: Contains static assets that won't be processed by Vite.
* **\`src/\`**: Contains your application's source code.
    * **\`assets/\`**: Holds images and other static resources.
    * **\`components/\`**: Place to put reusable React components.
    * **\`App.jsx\`**: The main application component.
    * **\`main.jsx\`**: The entry point for your React app.
* **\`index.html\`**: The main HTML file that loads your React application.
* **\`package.json\`**: Contains project metadata, scripts, and dependencies.
* **\`vite.config.js\`**: Vite configuration file

## Common Blockers and Their Solutions

While Vite is generally a smooth experience, you might encounter some issues. Here are some common blockers and solutions:

* **Port Already in Use:** If the port 5173 is already being used by another process, Vite will fail to start.

    **Solution:** You can either stop the process using that port or you can change the port that Vite is running on. For this to work, you need to open \`vite.config.js\` and add a \`server\` property:

    \`\`\`javascript
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    // https://vitejs.dev/config/
    export default defineConfig({
      plugins: [react()],
      server: {
        port: 3000,
      },
    })
    \`\`\`
     
    This tells Vite to use \`port 3000\` instead of the default \`5173\`.

* **Error related to React Refresh:** Sometimes Vite's React refresh plugin might not work correctly.

    **Solution:** Try to restart your development server by stopping it (Ctrl + C in the terminal) and starting it again using \`npm run dev\`. If this doesn't fix the problem, you can try to update the \`@vitejs/plugin-react\` package to the latest version using the command \`npm install @vitejs/plugin-react@latest\`.

* **CSS Modules:** You may encounter problems trying to use CSS modules if you are new to the concept.

    **Solution**: CSS Modules will generate unique classnames for all of your class names to avoid style conflicts across your application. To use it, you just need to use the syntax \`*.module.css\` instead of \`*.css\`.

    Example:
    Create a file called \`MyComponent.module.css\`:
    
    \`\`\`css
    .redText {
        color: red;
    }
    \`\`\`
    
    Then in your react component, import the styles object:

    \`\`\`jsx
    import React from 'react';
    import styles from './MyComponent.module.css';

    const MyComponent = () => {
        return <div className={styles.redText}>This is red text</div>;
    }

    export default MyComponent;
    \`\`\`
    
    Notice that we are passing the \`redText\` css class name via the \`styles\` object. This tells React and Vite that you want to use a CSS module in your application.

## Code Examples

Here are a few code examples for your understanding:

### A Simple React Component (\`src/components/HelloWorld.jsx\`)

\`\`\`jsx
import React from 'react';

const HelloWorld = ({ message }) => {
  return <h1>Hello, {message}!</h1>;
};

export default HelloWorld;
\`\`\`

### Using The Component (\`src/App.jsx\`)

\`\`\`jsx
import React from 'react';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
  return (
    <div className="App">
      <HelloWorld message="Vite!" />
    </div>
  );
}

export default App;
\`\`\`

### Basic CSS (\`src/App.css\`)

\`\`\`css
.App {
  text-align: center;
  padding: 20px;
}
\`\`\`

## Useful References

If you wish to deepen your knowledge about these technologies, here are a couple of resources:

* Vite Official Documentation: The best place to get comprehensive information about Vite. https://vitejs.dev/

* React Official Documentation: A good place to learn all about react. https://react.dev/

## That's It

It might be sad to see CRA go, but needs are changing and so are its solutions. Just **Vite** it! Okay seriously guys this time, it's funny!
`;


const Blog2 = () => {
  return (
    <>
      <Head>
            <title>Do Not Use Create React App, Use Vite Instead| Sam Capuchino</title>
            <link rel ="icon" href="/sam-logo-dark.png"/>
            <meta name="description" content="Full Stack Web Developer and Software Solutions Architect" />
       </Head>
      <div className={styles.blogContainer}>
         <CleanHeader/>
          <div className={styles.blogContent}>
              <ReactMarkdown
                children={markdownContent}
                remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = (className || '').match(/language-(\w+)/);
                          // Dynamically import SyntaxHighlighter when needed
                          if (!inline && match){
                              const language = match[1]
                            return  (
                                <DynamicSyntaxHighlighter
                                   language={language}
                                      children={String(children).replace(/\n$/, '')}
                                      {...props}
                               />
                            )
                          }
                         return (
                          <code className={className} {...props}>
                              {children}
                          </code>
                       );
                  },
                  table({node, ...props}){
                       return <table style={{ borderCollapse: 'collapse', width: '100%' }} {...props}></table>
                  },
                   th({ node, ...props }) {
                        return <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }} {...props}></th>;
                       },
                   td({ node, ...props }) {
                        return <td style={{ border: '1px solid #ddd', padding: '8px' }} {...props}></td>;
                       },
                   ul({ node, ...props }) {
                        return <ul style={{ listStyleType: 'disc', paddingLeft: '2rem' }} {...props}></ul>;
                      },
                    ol({ node, ...props }) {
                         return <ol style={{ listStyleType: 'decimal', paddingLeft: '2rem' }} {...props}></ol>;
                       },
                    li({ node, ...props }) {
                         return <li style={{ marginBottom: '0.5rem' }} {...props}></li>;
                       },

                   h1({node, ...props}){
                        return <h1 className={styles.blogTitle} {...props}></h1>;
                   },
                   h2({node, ...props}){
                       return <h2 className={styles.blogSubtitle} {...props}></h2>;
                   },
                    h3({node, ...props}){
                        return <h3 className={styles.blogSubSubtitle} {...props}></h3>;
                  },


               }}

              />
          </div>
          <div className={styles.blogFooter}>
                <p className={styles.blogLabel}>sam capuchino | blog 2</p>
          </div>
      </div>
    </>
  );
};


// Helper Component for Dynamic Import
const DynamicSyntaxHighlighter = ({language, children, ...props}) => {
  const [SyntaxHighlighter, setSyntaxHighlighter] = React.useState(null);
  const [dracula, setDracula] = React.useState(null);


  React.useEffect(() => {
    import('react-syntax-highlighter')
        .then(module => {
            setSyntaxHighlighter(() => module.Prism);
            return import('react-syntax-highlighter/dist/esm/styles/prism')

        }).then(module => {
            setDracula(() => module.dracula)
        })
  }, [])

  if(!SyntaxHighlighter || !dracula){
      return <pre><code {...props}>{children}</code></pre>
  }

  return (
      <SyntaxHighlighter
          children={children}
           style={dracula}
          language={language}
          PreTag="div"
          {...props}
      />
  )
}



export default Blog2;