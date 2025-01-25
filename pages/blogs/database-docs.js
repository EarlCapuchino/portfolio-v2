import styles from '../../styles/blogs/BlogN.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';
import CleanHeader from '../../components/CleanHeader';
import Head from 'next/head';
const markdownContent = `
# / Database Documentation with dbdocs and DBML
### 12 aug 2024
Hey everyone! This is Sam! A software developer who have spent good chunk of my work wrestling with the very crucial "world" of database. One thing I've learned the hard way is the absolute necessity of good database documentation. And you think only code repositories contain docs? It's here in database as well. But trust me, it's a 'lifesaver', and with tools like \`dbdocs\` and \`DBML\`, it’s become way less painful and even... kind of fun..in a way...I guess (??).

## Why Database Documentation Matters

Imagine you're trying to understand a complex system – maybe a website's backend, or even a small mobile application. The data model, represented by the database, is essentially the heart of that system. Without proper documentation, it's like trying to navigate a maze blindfolded.

Here's why database documentation isn't just a "nice to have," but an absolute *must*:

- **Understanding Data Structure:** Documentation reveals the structure of your data—the tables, columns, relationships, data types, and constraints. It's a roadmap that helps anyone on the team, including new developers, product managers, and even future you, understand the system's core.
- **Improved Communication:** When different teams need to interact with the database, clear documentation ensures everyone is on the same page. It eliminates guesswork and reduces the chance of misinterpretations and costly errors.
- **Faster Onboarding:** New team members can quickly grasp the database schema and start working productively with documented data. Without it, onboarding is slower, involving a lot of back-and-forth questioning.
- **Reduced Errors:** When developers and data scientists understand database relationships, they are less likely to create queries that produce inaccurate results or that damage the underlying data.
- **Easier Maintenance:** When it's time to modify the schema or refactor the database, well-maintained documentation is indispensable. It enables you to understand the impact of the changes and ensures there are fewer mistakes and unforeseen consequences.

## Introducing dbdocs

\`dbdocs\` is a service that renders your database schema documentation into a beautiful, interactive format. Think of it as a website that displays your database's structure in a visually appealing, navigable way. It's designed to be a convenient tool that helps everyone understand the database. It's not just for developers; even non-technical people can easily grasp the system's structure.

### Key Features of \`dbdocs\`:

- **Visualizations:** \`dbdocs\` generates entity-relationship diagrams (ERDs) that make relationships within your data very clear. These diagrams give a graphical way to see how tables relate.
- **Interactive Exploration:** You can click on tables and columns to view details about data types, constraints, relationships, and even comments. This lets you drill down and explore the documentation easily.
- **Sharing:** You can share the generated documentation by embedding it into internal wikis, project documentation, or just via a link. This helps share the data structure to stakeholders.
- **Version Control Integration:** \`dbdocs\` works with version control systems, allowing you to track changes to your database schema over time.
- **Multiple Schema Formats:** It can process schemas written in DBML (Database Markup Language), which we’ll get to next, but also SQL DDL statements and other common formats.

## Diving into DBML

\`DBML\` (Database Markup Language) is a language specifically designed for describing database schemas. It's not a database query language; it's a *structure* definition language. Using DBML makes your documentation a lot easier to read and maintain.

### Key Aspects of DBML:

- **Declarative Syntax:** DBML uses a declarative approach. You specify *what* your database schema should look like, rather than *how* it should be created. This makes it concise and easier to write.
- **Human-Readable:** DBML is designed to be easy for humans to read and understand. It uses a simple, intuitive syntax, with keywords that describe database components.
- **Version Control Friendly:** DBML files are plain text, which makes them perfect for version control systems like Git.
- **\`dbdocs\` Integration:** The \`dbdocs\` service is built to take DBML as an input source, making it easy to generate visual documentation.
- **Supports Relationships and Constraints:** You can clearly define relationships between tables and define the different types of constraints (primary key, foreign key, unique).

## Setting Up \`dbdocs\` and DBML with MySQL

Let's set up \`dbdocs\` and DBML using an example MySQL database. I will guide you step-by-step.

### Step 1: Install MySQL

If you don't have MySQL already, you will need to install it. Download and follow the installation instructions relevant to your operating system.

### Step 2: Create a Sample Database

Let's create a basic database. Open your MySQL terminal:

\`\`\`bash
mysql -u root -p
\`\`\`

Enter your root password. Then execute these commands:

\`\`\`sql
CREATE DATABASE IF NOT EXISTS my_blog;
USE my_blog;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

This will create a \`my_blog\` database with a \`users\` and \`posts\` table.

### Step 3: Install dbml-cli

You need a tool to generate DBML from your database schema. The \`dbml-cli\` is what you will need.

\`\`\`bash
npm install -g dbml-cli
\`\`\`

### Step 4: Export DBML from your MySQL Database

Now let's export the schema as DBML. The \`dbml-cli\` can help us with this:

\`\`\`bash
dbml-cli --mysql "mysql://root:your_password@localhost/my_blog" > schema.dbml
\`\`\`

Replace \`your_password\` with your MySQL root password. If the terminal throws an error, check if the database name is the same in the command.

### Step 5: Examine the schema.dbml File

After the previous step, you now have a \`schema.dbml\` file. It should look something like this:

\`\`\`dbml
Table users {
  id int [pk, increment]
  username varchar(255) [unique, not null]
  email varchar(255) [not null]
  created_at timestamp [default: \`CURRENT_TIMESTAMP\`]
}

Table posts {
  id int [pk, increment]
  user_id int [not null]
  title varchar(255) [not null]
  content text
  created_at timestamp [default: \`CURRENT_TIMESTAMP\`]

  Indexes {
    (user_id) [name: \`posts_user_id_fk\`]
  }
}

Ref: posts.user_id > users.id
\`\`\`

### Step 6: Create an Account with dbdocs

Go to [dbdocs.io](https://dbdocs.io) and create an account. It's free to start.

### Step 7: Upload Your schema.dbml File to dbdocs

1. Log in to your \`dbdocs\` account.
2. Create a new project.
3. Upload the \`schema.dbml\` file.

\`dbdocs\` should now generate documentation for your database.

### Step 8: View and Share the Documentation

You can now view the rendered documentation. Explore the interactive ERD, the table definitions, and all the related components of the database structure.

## Understanding the Code: A Detailed Breakdown

### MySQL Commands

#### Create Database and Tables

\`\`\`sql
CREATE DATABASE IF NOT EXISTS my_blog;
USE my_blog;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

### dbml-cli Command

\`\`\`bash
dbml-cli --mysql "mysql://root:your_password@localhost/my_blog" > schema.dbml
\`\`\`

- \`dbml-cli\`: The command-line tool we installed.
- \`--mysql "mysql://..."\`: The connection string to your database. Replace \`root:your_password\` with your database root password.
- \`> schema.dbml\`: Redirects the output to a file named \`schema.dbml\`.

### DBML Syntax

\`\`\`dbml
Table users {
  id int [pk, increment]
  username varchar(255) [unique, not null]
  email varchar(255) [not null]
  created_at timestamp [default: \`CURRENT_TIMESTAMP\`]
}

Table posts {
  id int [pk, increment]
  user_id int [not null]
  title varchar(255) [not null]
  content text
  created_at timestamp [default: \`CURRENT_TIMESTAMP\`]

  Indexes {
    (user_id) [name: \`posts_user_id_fk\`]
  }
}

Ref: posts.user_id > users.id
\`\`\`

- \`Table users { ... }\`: Defines the \`users\` table and all its columns.
- \`id int [pk, increment]\`: The \`id\` column is of integer type, acts as the primary key (\`pk\`), and auto-increments.
- \`Ref: posts.user_id > users.id\`: Defines a foreign key relationship. Here it signifies that the \`user_id\` in the \`posts\` table is referencing the \`id\` in the \`users\` table.

## Troubleshooting Common Blockers

| Blocker                                | Solution                                                                                   |
|---------------------------------------|-------------------------------------------------------------------------------------------|
| MySQL server not running              | Make sure your MySQL server is running by checking your services/system settings.         |
| Incorrect MySQL password in the CLI   | Verify the password you provided in the \`dbml-cli\` command.                               |
| dbml-cli command not found            | Ensure you installed \`dbml-cli\` globally with the correct command: \`npm install -g dbml-cli\`. |
| Database doesn't exist                | Ensure you created the database. Revisit Step 2 to create the needed database and tables. |
| Syntax errors when creating tables    | Double-check your SQL syntax against available documentation and examples.                |
| dbdocs fails to render the schema     | Make sure the \`schema.dbml\` file is valid. Check for syntax errors against DBML documentation. |
| Tables not showing up on dbdocs       | Ensure your tables have relationships set up properly in the \`schema.dbml\` file.          |

## Table Comparison Between DBML and SQL

| Feature             | DBML                                          | SQL                                           |
|---------------------|----------------------------------------------|-----------------------------------------------|
| Purpose             | Database schema description, documentation   | Database definition and manipulation          |
| Readability         | Designed to be human-readable, simplified schema representation | Can be complex, not specifically geared toward human readability. |
| Primary Use         | Documentation, schema sharing with non-technical audiences | Creation, modification, and querying of databases. |
| Syntax              | Declarative, concise with focus on structure | Imperative, detailed with focus on operation. |
| Direct Execution    | Not executable as SQL commands, requires conversion | Directly executable by a database server      |
| Relationship        | Defines relationships via \`Ref\` keyword      | Defines relationships via \`FOREIGN KEY\` constraints within table creation |

## Useful References

- **dbdocs Documentation:** [https://dbdocs.io/docs](https://dbdocs.io/docs)
- **DBML Specification:** [https://dbml.org/docs/](https://dbml.org/docs/)
- **MySQL Documentation:** [https://dev.mysql.com/doc/](https://dev.mysql.com/doc/)
- **npm Documentation:** [https://docs.npmjs.com/](https://docs.npmjs.com/)

## That's It

Database documentation can feel like an extra boring step, but it will save a lot of trouble in the long run, sounds cliche? because it is! There are no better way to explain your db to other developers but this way, unless of course, you are a highly extroverted old-fashioned guy that prefers the habit of repeatedly explaining something over and over again!
`;


const Blog4 = () => {
  return (
    <>
       <Head>
            <title>Database Documentation with dbdocs and DBML| Sam Capuchino</title>
            <link rel ="icon" href="/sam-logo-dark.png"/>
            <meta name="description" content="Full Stack Web Developer and Software Solutions Architect" />
       </Head>
       <div className={`${styles.blogContainer}`}>
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
                <p className={`${styles.blogLabel}`}>sam capuchino | blog 4</p>
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



export default Blog4;