import styles from '../../styles/blogs/BlogN.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';
import CleanHeader from '../../components/CleanHeader';
import Head from 'next/head';
const markdownContent = `
# / QA Documentation for Beginners
### 07 jun 2024
Hey everyone! This is Sam! Recently these past few months, I have been handling a lot of QA roles and have seen the critical role quality assurance (QA) plays in delivering successful and robust software. You might be wondering, "What exactly *is* QA documentation, and why should I, as a beginner, even care about it?" Well, let me narrate my experiences, breaking it down in a way that's not only easy to understand but also gives you a solid foundation.

---

## Why Documentation Matters

Imagine constructing a building without blueprints. Sounds chaotic, right? That's what software development looks like without proper documentation. Documentation, in its simplest form, serves as our blueprint – it records the *what*, the *why*, and the *how* of the project. In QA, this becomes crucial. Here's why:

- **Clarity:** Good QA documentation prevents ambiguity. It clearly defines what’s being tested, the expected outcome, and any deviations that occur. This ensures everyone on the team, from developers to product managers, is on the same page.
- **Consistency:** When testing is documented, it creates a consistent process. Testers aren't reinventing the wheel every time. This promotes uniformity, making testing more efficient and less prone to human error.
- **Reproducibility:** If a bug is found, documentation enables us to reproduce it reliably. This is vital for developers to fix the issue and verify the fix effectively.
- **Knowledge Transfer:** When team members move on or new ones join, documentation acts as a bridge. They can quickly learn the existing processes and start contributing immediately.
- **Project History:** Documentation provides an audit trail of our testing efforts, demonstrating our testing coverage over time. This gives visibility on the product's health and helps in making release decisions.

---

## Diving Into Testing and QA Testing

Before we jump into documentation, let's clarify what testing and QA testing actually are.

- **Testing:** At its core, testing is about verifying if a piece of software does what it is *supposed* to do. This involves executing the application, providing inputs, and checking that outputs match expectations.
- **QA Testing (Quality Assurance Testing):** This is a broader term that includes testing but also focuses on the *process* of building software. It ensures that we aren’t just finding bugs, but that the entire software development lifecycle is geared towards producing high-quality products.

### Think of it this way:

- **Testing:** "Is this feature working?"
- **QA Testing:** "How can we *ensure* this feature always works, and what steps can we take to prevent similar issues in the future?"

---

## What is QA Documentation?

QA documentation is the written record of all activities related to QA testing. It is a tangible form of our test plans, test cases, test results, and anything else related to ensuring quality. Here's what it generally includes:

- **Test Plans:** High-level documents that describe the scope, approach, resources, and schedule of a testing effort. It's like the roadmap of our testing journey.
- **Test Cases:** Individual sets of instructions for testing specific features. They specify the inputs, steps, and expected outputs. Think of it like an itemized list of what we want to verify.
- **Test Scripts:** Often automated implementations of test cases. They can be written using specific programming languages and are used to streamline and speed up testing.
- **Test Data:** The data used in test cases. It needs to be realistic but also account for edge cases.
- **Bug/Defect Reports:** Detailed reports of any discrepancies between the expected and actual results. These are crucial for developers to pinpoint and fix the issues.
- **Test Results/Summary Reports:** Overall summaries of the testing activities, highlighting key findings, the number of bugs found, the overall testing health of the product, and recommendations.

---

## Tips for Writing Effective QA Documentation

Writing effective documentation involves a thoughtful and detailed approach. Here are some tips to keep in mind:

- **Clarity is Key:** Use simple language and avoid jargon where possible. Remember, the documentation may be read by different people with varying backgrounds.
- **Be Specific:** Don’t make vague statements. Use concrete examples and details in your descriptions.
- **Keep it Concise:** Avoid unnecessary details and keep your sentences short and to the point.
- **Organization is Crucial:** Use headers, bullets, and tables to make your documentation easy to navigate and understand.
- **Keep it Updated:** Ensure that your documentation reflects the most up-to-date information about the software.
- **Use Version Control:** Store your documentation in version-controlled systems so you can track changes and collaborate with others.

---

## Understanding Bugs

A bug, also known as a defect, is an error in the software that causes it to produce unexpected results. Bugs are a normal part of software development, but they need to be identified and fixed effectively. Here are some things to keep in mind:

- **Severity:** Bugs can vary in their impact. Some might cause crashes, while others may be minor visual glitches. Categorize bugs by severity so that critical issues can be prioritized.
- **Reproducibility:** Is the bug consistently reproducible? If not, describe the conditions when it occurs. The more information you provide, the easier it is for developers to debug.
- **Root Cause:** When you document a bug, it's essential to identify what triggered it. Knowing the cause will greatly aid developers in finding a fix.

---

## Submitting Bug Reports

A well-written bug report significantly improves the development process. A good bug report should include:

1. **Summary:** A concise statement of the problem.
2. **Environment:** Operating system, browser, device, and software version.
3. **Steps to Reproduce:** The exact steps you took to encounter the bug.
4. **Expected Result:** What *should* happen.
5. **Actual Result:** What *actually* happened.
6. **Screenshots or Videos:** Visuals can greatly help in understanding the context.
7. **Severity and Priority:** The level of impact the bug has.

### Tips for Writing Effective Bug Reports

- **Be Clear and Concise:** Avoid jargon.
- **Be Specific:** Provide all the necessary details.
- **Be Objective:** Focus on the facts without blaming anyone.
- **Use a Consistent Template:** Follow the guidelines of your team.
- **Prioritize:** Assign a severity level to each bug (e.g., Critical, High, Medium, Low).

---

## Modern Trends in Testing

Testing is constantly evolving. Here are some trends to be aware of:

- **Agile Testing:** Integration of testing throughout the entire development cycle, aligning with Agile principles.
- **Shift-Left Testing:** Start testing early in the process to prevent defects from happening down the line.
- **Continuous Testing:** Continuous validation of code changes during development, part of CI/CD (Continuous Integration and Continuous Deployment) pipelines.
- **Performance Testing:** Evaluation of application responsiveness under different load conditions.
- **Security Testing:** Focus on vulnerabilities and protections within the application.

---

## Automation in Testing

Automated testing involves using tools and scripts to perform tests, thereby reducing the time it takes to test software. Automation helps in:

- **Regression Testing:** Ensuring that new changes haven't broken existing features.
- **Faster Testing:** Automation allows you to run tests faster than manual testing.
- **Coverage:** Automation enables you to test more scenarios more frequently.

Automated tests should be treated as code. They need to be maintained, updated, and improved over time.

---

## Example: Testing a Simple Calculator Function

Let's solidify our concepts by testing a function. We will set up, code, and test an adder function using Python.

### Step 1: Setup the Environment

1. **Install Python:** Make sure you have Python installed. You can download it from [python.org](https://www.python.org/).
2. **Create a New Directory:** Create a directory to store your files (e.g., \`calculator_testing\`).
3. **Navigate to the Directory:** In your terminal, navigate to the newly created directory using the \`cd\` command:

    \`\`\`bash
    cd calculator_testing
    \`\`\`

### Step 2: Create the Function

Create a file named \`calculator.py\` and add the following code:

\`\`\`python
# calculator.py
def add(x, y):
    """Adds two numbers."""
    return x + y
\`\`\`

### Step 3: Create Test Cases

Create a file named \`test_calculator.py\` and add the following code using \`unittest\`:

\`\`\`python
# test_calculator.py
import unittest
from calculator import add

class TestCalculator(unittest.TestCase):

    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)

    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)

    def test_add_positive_and_negative_numbers(self):
        self.assertEqual(add(5, -2), 3)

    def test_add_zero(self):
        self.assertEqual(add(5, 0), 5)

if __name__ == '__main__':
    unittest.main()
\`\`\`

### Step 4: Run the Tests

Run the tests from the terminal using the following command:

\`\`\`bash
python -m unittest test_calculator.py
\`\`\`

### Step 5: Terminal Response

\`\`\`bash
....
----------------------------------------------------------------------
Ran 4 tests in 0.001s

OK
\`\`\`

### Step 6: Bug Report (If a Bug Were Present)

#### Example Bug Report

**Summary:** The \`add\` function returns an incorrect result when adding two negative numbers.

**Environment:**

- Operating System: macOS Ventura
- Python Version: 3.11

**Steps to Reproduce:**

1. Run the \`test_add_negative_numbers\` test case.

**Expected Result:** The function \`add(-1, -1)\` should return \`-2\`.

**Actual Result:** The function returns \`0\`.

**Screenshot:** (If applicable, include the failing test result).

**Severity:** High

**Priority:** High

---

## Blockers and Solutions

1. **Blocker:** Unable to install Python.  
   **Solution:** Follow the instructions on the Python website, making sure the correct OS was selected.

2. **Blocker:** Tests not running with \`python -m unittest test_calculator.py\`.  
   **Solution:** Ensure file names are correct, \`unittest\` was imported correctly, and the Python version is compatible.

3. **Blocker:** The test \`test_add_negative_numbers\` failed due to incorrect logic.  
   **Solution:** Update the logic in the \`add\` function and rerun the tests to ensure all cases pass.

---

## Useful References

- [Python Unittest Documentation](https://docs.python.org/3/library/unittest.html)
- [Software Testing (Wikipedia)](https://en.wikipedia.org/wiki/Software_testing)
- [ISTQB Foundation Level](https://www.istqb.org/)

---

## Conclusion

QA documentation provides clarity, consistency, and reproducibility, allowing us to build higher-quality software efficiently. The most boring step of software development as they say, is the very element that even they, as the developers, get annoyed if missing. Documentation is the friendliest gesture you can show to your fellow developer!
`;


const Blog3 = () => {
  return (
    <>
       <Head>
            <title>QA Documentation for Beginners | Sam Capuchino</title>
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
                <p className={`${styles.blogLabel}`}>sam capuchino | blog 3</p>
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



export default Blog3;