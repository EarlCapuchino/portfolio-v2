import styles from '../../styles/blogs/BlogN.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';
import CleanHeader from '../../components/CleanHeader';
import Head from 'next/head';
const markdownContent = `
# / Selenium and End-to-End Tests
### 30 sep 2024
Hey everyone! This is Sam! As a recent QA tester, I've spent a lot of time ensuring that the software I build actually works as it should. Other developers may actually hate me, but it's part of the job. Quite frankly though, QA is there to make sure that in a long run, developers would not worry so much! A crucial aspect to do this is testing, and one particular type of testing—end-to-end testing—has always been a strong focus for me. Almost all of QA testers I know started with Selenium-so let's discuss that here as an example

## Understanding Selenium

Selenium is a suite of tools designed to automate web browsers. Think of it as a robot that can navigate websites, interact with elements, input data, and verify behavior, all just like a human would, but through code. The basic idea is to have code, instead of manual effort, carry out tests on your web application through a browser.

### Key Components of Selenium

- **Selenium WebDriver:** This is the core component. It provides a programming interface to control browsers. The WebDriver acts as an intermediary, translating instructions from your code into browser actions. Each browser (Chrome, Firefox, Safari, etc.) has a specific WebDriver implementation.
- **Selenium IDE:** This is a browser extension that allows you to record interactions with a webpage. It's a good way to create test scripts quickly. The recorded steps can then be exported into code.
- **Selenium Grid:** A tool that allows you to run tests on different machines and browsers in parallel. This is crucial when you need to test against various browser versions and OS environments concurrently.

### Why Selenium is Important

- **Automation:** Selenium automates the testing process. This saves time and resources and also helps ensure your tests are repeatable and can run continuously.
- **Cross-Browser Compatibility:** Using Selenium you can test your application across different browsers, ensuring your website works for a variety of users.
- **Regression Testing:** When code is modified, Selenium can be used to retest the application quickly to ensure that previously working functions continue to do so, preventing bugs.
- **Complex Scenarios:** It can simulate user interactions with ease, allowing you to create test scenarios that would be difficult or time-consuming to carry out manually.
- **Free and Open-Source:** Selenium is free to use and has a large and active community, providing ample resources and support.

## End-to-End Testing (E2E)

End-to-end (E2E) testing is a type of software testing that validates the entire application workflow from start to finish. It simulates a real user interacting with the application from the frontend through the backend.

### What E2E Tests Do

- **Validating the Entire System:** E2E tests don't just focus on individual components; instead, they verify the entire system's behavior. This means checking the interaction between the UI, API, database, and any other integrated elements.
- **Simulating User Behavior:** It checks if users can correctly accomplish tasks using your application the way they would in a real-world environment.
- **Verifying Integrations:** These tests help to uncover defects that may arise when different components interact with each other.

### Why E2E Tests Are Important

- **Holistic View:** E2E tests provide a complete picture of the system's health. They verify not just individual features but the entire flow.
- **Catching Critical Bugs:** These tests can identify defects that might be missed by unit or integration tests. These issues are often related to miscommunications between components.
- **User Experience Verification:** E2E testing ensures users have a smooth and consistent experience, even after significant changes or updates.
- **Reducing Risk:** By simulating user interactions, you reduce the risk of deploying a broken system that can lead to user frustrations and financial losses.

## End-to-End Testing with Selenium

Combining Selenium with end-to-end tests allows you to automate the verification of user workflows in a real browser environment. This is where we get the best of both worlds.

### Key Benefits

- **Automated Browser Interactions:** Selenium controls the browser and executes your E2E test, freeing up your time from manual testing.
- **Full Flow Verification:** You can simulate user interactions across different pages and components. This ensures that the complete flow works as planned.
- **Repeatable Tests:** Automated tests are consistent and repeatable, allowing you to run them as many times as needed.
- **Continuous Testing:** These tests can be integrated into your continuous integration/continuous delivery (CI/CD) pipeline, ensuring every build is tested.

### Core Steps of E2E Testing with Selenium

1. **Setup:** You'll need to set up the Selenium WebDriver and the browser driver.
2. **Test Script Creation:** You'll create scripts that define the user interaction flow (e.g., navigate to a page, click a button, enter data).
3. **Verification:** These scripts will also include validation steps to ensure that expected behaviors occur as the user goes through the workflow.
4. **Execution:** The script will be executed, which will use the browser driver to interact with the browser.
5. **Reporting:** The test result will be reported which will show you whether the expected behavior was observed or not.

## Setting Up Selenium for E2E Tests (Python Example)

Let’s walk through setting up Selenium with Python.

### Step 1: Install Python and Pip

Make sure you have Python and pip (Python's package installer) installed. Download them from the official Python website.

### Step 2: Create a Python Project

Create a new directory to store your project (e.g., \`e2e_testing\`).

\`\`\`bash
mkdir e2e_testing
cd e2e_testing
\`\`\`

### Step 3: Set Up a Virtual Environment

I recommend setting up a virtual environment to isolate your project's dependencies:

\`\`\`bash
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\\Scripts\\activate  # On Windows
\`\`\`

### Step 4: Install Selenium

Install the Selenium library using pip:

\`\`\`bash
pip install selenium
\`\`\`

### Step 5: Download a Browser Driver

You need to download a specific WebDriver implementation for the browser you want to automate (e.g., ChromeDriver for Chrome, GeckoDriver for Firefox). Place the driver executable in a location that is in your system's PATH. Download these drivers from their official websites.

### Step 6: Write a Test Script

Create a file named \`test_example.py\` and add the following code:

\`\`\`python
# test_example.py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest

class TestExample(unittest.TestCase):

    def setUp(self):
        # Initialize WebDriver
        self.driver = webdriver.Chrome()  # Change to Firefox(), Safari(), or Edge() if you use those browsers
        self.driver.get("https://example.com")

    def tearDown(self):
        self.driver.quit()

    def test_verify_title(self):
        WebDriverWait(self.driver, 10).until(
            EC.title_contains("Example Domain")
        )
        self.assertEqual(self.driver.title, "Example Domain")

    def test_verify_h1_text(self):
        h1 = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "h1"))
        )
        self.assertEqual(h1.text, "Example Domain")

if __name__ == '__main__':
    unittest.main()
\`\`\`

### Step 7: Run the Test

Run your test with the following command:

\`\`\`bash
python -m unittest test_example.py
\`\`\`

### Step 8: Review Terminal Response

The terminal response should show if the test has passed or failed.

\`\`\`
..
----------------------------------------------------------------------
Ran 2 tests in 1.212s

OK
\`\`\`

## Code Breakdown

### Test Script (\`test_example.py\`)

\`\`\`python
# test_example.py
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import unittest

class TestExample(unittest.TestCase):

    def setUp(self):
        # Initialize WebDriver
        self.driver = webdriver.Chrome()  # Change to Firefox(), Safari(), or Edge() if you use those browsers
        self.driver.get("https://example.com")

    def tearDown(self):
        self.driver.quit()

    def test_verify_title(self):
        WebDriverWait(self.driver, 10).until(
            EC.title_contains("Example Domain")
        )
        self.assertEqual(self.driver.title, "Example Domain")

    def test_verify_h1_text(self):
        h1 = WebDriverWait(self.driver, 10).until(
            EC.presence_of_element_located((By.TAG_NAME, "h1"))
        )
        self.assertEqual(h1.text, "Example Domain")

if __name__ == '__main__':
    unittest.main()
\`\`\`

- \`from selenium import ...\`: Imports required Selenium modules.
- \`webdriver\`: To control the browser.
- \`By\`: To locate HTML elements.
- \`WebDriverWait\`: To wait for elements to be available.
- \`expected_conditions\`: To check for specific conditions of an element.
- \`import unittest\`: Imports \`unittest\` which is a testing framework in Python.
- \`class TestExample(unittest.TestCase):\`: Defines a class that inherits from \`unittest.TestCase\`. This is how we tell Python this class is meant for testing.
- \`setUp\`: Initializes each test by opening a browser instance to a specific page.
- \`self.driver = webdriver.Chrome()\`: Initializes a Chrome driver to automate a Chrome browser.
- \`tearDown\`: Cleans up each test after it has finished.
- \`self.driver.quit()\`: Closes the browser window.
- \`test_verify_title\`: A test case verifying page title.
- \`WebDriverWait(self.driver, 10).until(EC.title_contains("Example Domain"))\`: Waits up to 10 seconds until the page title has the string "Example Domain" in it.
- \`test_verify_h1_text\`: A test case that locates an \`h1\` HTML element and validates its text content.
- \`WebDriverWait(self.driver, 10).until(EC.presence_of_element_located((By.TAG_NAME, "h1")))\`: Waits up to 10 seconds until an \`h1\` element is located in the DOM.
- \`if __name__ == '__main__': unittest.main()\`: Starts the tests when the script is executed.

## Troubleshooting Common Blockers

| Blocker                                | Solution                                                                                   |
|---------------------------------------|-------------------------------------------------------------------------------------------|
| Browser driver executable not found   | Ensure the correct driver is downloaded and is in a directory that's included in your system's PATH. |
| Selenium module not found             | Double-check that you have installed Selenium with \`pip install selenium\`.                |
| Browser crashes or hangs              | Check browser and driver versions are compatible. Check you have the correct driver for your specific browser. |
| Test script failing                   | Check the locators, assertions, and browser interactions in the script. Use debugging tools. |
| WebDriverWait timeouts                | Check if the element locator is correct, and if there are any delays that would cause it to timeout. |
| Page elements not located properly    | Double-check the page source code. Ensure you are using the correct CSS selectors or Xpaths. |
| Inconsistent test results             | Ensure test environments are the same or create logic that can handle variation.          |

## Table Comparison Between Selenium IDE and Selenium WebDriver

| Feature                | Selenium IDE                              | Selenium WebDriver                                |
|------------------------|------------------------------------------|-------------------------------------------------|
| Setup                 | Easy, browser extension                  | Requires installing browser drivers and libraries |
| Programming           | No coding required                       | Coding required in programming languages like Python, Java, etc. |
| Flexibility           | Limited, mainly for simple recording and replay | Highly flexible, powerful for complex test scenarios |
| Cross-Browser         | Limited support, not all browsers        | Full support for all major browsers             |
| Maintainability       | Less maintainable for large complex tests | Well-suited for large, maintainable test suites |
| Integration           | Limited integration with other tools     | Easily integrated into CI/CD pipelines and test frameworks |
| Suitability           | Quick prototyping and simple tests       | Comprehensive E2E testing and large automation projects |

## Useful References

- **Selenium Official Documentation:** [https://www.selenium.dev/documentation/](https://www.selenium.dev/documentation/)
- **Selenium with Python Tutorial:** [https://selenium-python.readthedocs.io/](https://selenium-python.readthedocs.io/)
- **ChromeDriver Download:** [https://chromedriver.chromium.org/downloads](https://chromedriver.chromium.org/downloads)
- **GeckoDriver Download:** [https://github.com/mozilla/geckodriver/releases](https://github.com/mozilla/geckodriver/releases)
- **Python unittest Documentation:** [https://docs.python.org/3/library/unittest.html](https://docs.python.org/3/library/unittest.html)

## That's It

Selenium and end-to-end tests are essential.With automation, you can be more confident that your system works as you intended it. There is just simple no escape for this, HAHA! Everyone is bound to test anyways!
`;

const Blog5 = () => {
  return (
    <>
       <Head>
            <title>Selenium and End-to-End Tests | Sam Capuchino</title>
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
                <p className={`${styles.blogLabel}`}>sam capuchino | blog 5</p>
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



export default Blog5;