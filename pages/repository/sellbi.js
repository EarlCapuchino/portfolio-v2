import styles from '../../styles/RepositoryN.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import React from 'react';
import CleanHeader from '../../components/CleanHeader';
import Image from 'next/image';
import Head from 'next/head';

const RepositoryItem = () => {
     const markdownContent = `
# Sellbi

This document outlines the technical specifications, development process, performance metrics, and a comprehensive overview of the completed "SELBi" application. This e-commerce platform, exclusively for members of a large organization, is built using J2EE, Spring Boot, and Apache Tomcat.

**Deployment date:** March 6, 2021. 

## 1. Dependencies

**Development Tools and Libraries:**

1.  **Java Development Kit (JDK) 11 or Later:**
    *   **Purpose:** Core development platform for Java applications.
    *   **Version:** JDK 11 was a widely adopted LTS (Long-Term Support) version in 2021, ensuring compatibility with other libraries used in SELBi.

2.  **Spring Boot 2.4.2 or Later:**
    *   **Purpose:** The primary framework for developing the backend application.
    *   **Version:** Spring Boot 2.4.2 was a stable release at the time of deployment and provided necessary features and improvements.

3.  **Apache Tomcat 9.0.41 or Later:**
    *   **Purpose:** Application server for hosting the Spring Boot application.
    *   **Version:** Apache Tomcat 9.0.41 was a stable and commonly used web server for Java applications in early 2021.

4.  **Spring Security 5.4.2 or Later:**
    *   **Purpose:** Handles application security, including user authentication and authorization.
    *   **Version:** Spring Security 5.4.2 was chosen to implement robust security measures.

5.  **Spring Data JPA 2.4.2 or Later:**
    *   **Purpose:** Simplifies database interactions using Java Persistence API (JPA).
    *   **Version:** Spring Data JPA 2.4.2 provided data access layer implementation.

6.  **Hibernate 5.4.27 or Later:**
    *   **Purpose:** The ORM (Object-Relational Mapping) framework used by Spring Data JPA.
    *   **Version:** Hibernate 5.4.27 was used as the ORM for all database interactions.

7. **Thymeleaf 3.0.12 or Later:**
   *  **Purpose:** Used for server side rendering of HTML.
   * **Version:** version 3.0.12 was used as a server side templating engine.

8.  **MySQL Connector/J 8.0.23 or Later:**
    *   **Purpose:** JDBC driver to connect the application to the MySQL database.
    *   **Version:** MySQL Connector/J 8.0.23 was used for connecting to MySQL.

9.  **Lombok 1.18.16 or Later:**
    *   **Purpose:** Reduces boilerplate code in Java classes with annotations.
    *   **Version:** Lombok 1.18.16 was used to minimize boilerplate code.

10. **Jackson 2.12.1 or Later:**
    *   **Purpose:** Used for JSON serialization and deserialization.
    *   **Version:** Jackson 2.12.1 was the preferred JSON processing library in 2021.

11. **JUnit 5.7.0 or Later:**
     *  **Purpose:** For implementing comprehensive unit tests for core features.
     *  **Version:** JUnit 5.7.0 was chosen for testing the Java code.

12. **Maven 3.6.3 or Later:**
     *  **Purpose:** Used for project management and dependency management.
     *   **Version:** Maven 3.6.3 was used for dependency management and building the application.

**Deployment Techniques:**

*   **Virtual Private Server (VPS):** The application is deployed on a VPS for scalability and control.
*   **Apache Tomcat:** Application server deployed directly on the VPS.
*   **MySQL Database:** Database server hosted on the same or a different VPS.
*   **Nginx:** Reverse proxy for handling HTTP/HTTPS requests and load balancing.
*  **Jenkins:** Used for continuous integration and continuous delivery for automated build and deployment.

**Database Design (MySQL):**

SELBi uses a relational database schema using MySQL. Here's a breakdown of the tables and their fields:

1.  **Members Table (\`members\`):**
    *   Stores information about each registered member.
        *   \`id\` (INT, primary key, auto-increment)
        *   \`email\` (VARCHAR, unique, not null)
        *    \`password\` (VARCHAR, not null)
        *   \`name\` (VARCHAR, not null)
        *   \`registration_date\` (TIMESTAMP)
        * \`verified\` (BOOLEAN, default false)
         *    \`contact_number\` (VARCHAR)
         *    \`address\` (VARCHAR)

2.  **Products Table (\`products\`):**
    *   Contains product listings posted by members.
        *   \`id\` (INT, primary key, auto-increment)
        *   \`member_id\` (INT, foreign key referencing \`members.id\`, not null)
        *   \`title\` (VARCHAR, not null)
        *   \`description\` (TEXT)
        *   \`price\` (DECIMAL, not null)
        *   \`upload_date\` (TIMESTAMP)
          *   \`status\` (ENUM('Pending','Approved','Disapproved'), default Pending)
3.  **Product Images Table (\`product_images\`):**
    *   Stores paths to product images.
    *   \`id\` (INT, primary key, auto-increment)
    *   \`product_id\` (INT, foreign key referencing \`products.id\`, not null)
    *   \`image_url\` (VARCHAR, not null)

4.  **Bids Table (\`bids\`):**
     *   Contains bids placed by buyers on specific products.
        *   \`id\` (INT, primary key, auto-increment)
        *   \`member_id\` (INT, foreign key referencing \`members.id\`, not null)
        *    \`product_id\` (INT, foreign key referencing \`products.id\`, not null)
        *   \`bid_date\` (TIMESTAMP)
        *   \`bid_amount\` (DECIMAL, not null)
        *   \`comments\` (TEXT)

5.  **Transactions Table (\`transactions\`):**
    *   Captures details of completed transactions.
         *   \`id\` (INT, primary key, auto-increment)
         *   \`product_id\` (INT, foreign key referencing \`products.id\`, not null)
        *   \`buyer_id\` (INT, foreign key referencing \`members.id\`, not null)
        *   \`seller_id\` (INT, foreign key referencing \`members.id\`, not null)
        *   \`transaction_date\` (TIMESTAMP)
         *    \`meet_up_approved\` (BOOLEAN, default false)
        *    \`buyer_approved\` (BOOLEAN, default false)
         *  \`seller_approved\` (BOOLEAN, default false)

6.  **Reports Table (\`reports\`):**
     * Contains reports made by members for a specific post.
         *   \`id\` (INT, primary key, auto-increment)
        *   \`reporter_id\` (INT, foreign key referencing \`members.id\`, not null)
        *   \`reported_id\` (INT, foreign key referencing \`members.id\`, not null)
       *    \`product_id\` (INT, foreign key referencing \`products.id\`, not null)
       * \`reason\` (VARCHAR, not null)
        * \`report_date\` (TIMESTAMP)
        * \`status\` (ENUM('Pending','Resolved'), default Pending)

## 2. Development

**Specific Developer Tasks (Completed):**

1.  **Email Verification System:**
    *   Implemented a system for user registration using work email addresses.
    *   Integrated an email verification process to ensure only valid members of the organization can register.
2.  **Product Listing:**
    *   Developed functionality for members to list products, including descriptions, images, and prices.
    *   Implemented file upload handling.
3.  **Public Wall Functionality:**
    *   Created a dynamic public wall displaying all approved product listings.
4.  **Moderation System:**
    *   Implemented an approval/disapproval system for moderators to review product posts.
    *   Created a system for moderator to access, manage, and view user activities.
    *   Created a system for moderators to reveal contact details of the buyer and seller when a bid is won.
5.  **Bidding System:**
    *   Implemented a comment section for members to bid on products.
    *    Created a function where the seller can click “meet-up request” to initiate a meet-up
6.  **Transaction Approval:**
    *   Implemented a transaction approval system that requires both buyer and seller confirmation for the transaction to finalize.
7. **Report and Return system:**
    *    Implemented a report system where members may report other members that violate the community guidelines.
    *    Implemented a return function for moderator to arrange for a return request.
8.  **UI/UX Design:**
    *   Created a user-friendly and responsive interface using Thymeleaf.
9.  **Testing:**
     *   Implemented unit tests for backend logic using JUnit.
      *   Performed thorough testing for system bugs and errors.
10. **Deployment:**
    * Deployed the SELBi application on the VPS.
    * Configured the database and the web server accordingly.
    * Set-up CI/CD.

**Metrics:**

*   **Member Registration:** Number of members successfully registered.
    *   **Current Total Members: 200**
*   **Daily Active Users (DAU):** Tracked daily active users.
    *   **Current DAU: 80** (Approximately 40% of total users are active daily)
*   **Monthly Active Users (MAU):** Tracked monthly active users.
    *   **Current MAU: 150** (Reflects most users are active within a month)
*   **Product Listings:** Number of product listings posted.
     *  **Average daily Product Listings: 15** (Lowered to reflect a smaller user base)
*   **Bids Placed:** Number of bids placed.
     *  **Average Bids per day: 30+** (Lowered to reflect a smaller user base)
*   **Transactions Completed:** Number of completed transactions, indicating successful trade.
     *   **Average Transactions Per Day: 3** (Lowered to reflect a smaller user base)
*   **Moderation Time:** Time taken by moderators to approve/disapprove listings.
    *  **Average Moderation time: 5 minutes per listing** (Remains the same as it is not dependent on user base)
*  **Transaction Confirmation Time**: Time taken for buyer and seller to approve transactions.
     * **Average Transaction Confirmation time: 1 day** (Remains the same)
*  **Report Resolution Time:** Time taken by moderators to resolve reports.
     * **Average Report Resolution Time: 2 days** (Remains the same)
*   **App Uptime:** Percentage of time the application is available.
    *   **Current Uptime: 99.8%** (Remains the same)
*   **System Load:** Metrics on CPU and memory usage on the server.
   * **Average server load : 15%** (Lowered as user base is smaller)

## 3. Summary

"SELBi" is a secure e-commerce platform developed exclusively for members of a large organization. It facilitates trading among verified members, ensuring a trusted and controlled environment. Built using J2EE, Spring Boot, and Apache Tomcat, with a MySQL database, the application provides a reliable and efficient platform for buying and selling goods within the organization. SELBi was deployed on March 6, 2021, and is currently operating with 200 active users.

**Application Specifications (Completed - March 6, 2021):**

*   **Platform:** Web application.
*   **Technology:** J2EE, Spring Boot, Spring Security, Spring Data JPA, Hibernate, Apache Tomcat, MySQL.
*   **Email Verification:** Users are verified through their work email addresses, restricting registration to the organization.
*   **Database:** MySQL for storing all application data.
*   **UI Framework:** Thymeleaf templating for server side rendering.
*   **Functionality:**
    *   Secure member registration via email verification.
    *   Product listing with images, descriptions, and prices.
    *   Public wall for all approved product listings.
    *   Moderator control for approving listings and revealing contact details after a win.
    *   Bidding system in the comment section.
    *   Secure transaction confirmation process with buyer and seller approval.
     *   Reporting system to report members that violates community guidelines.
     *   Return system for Moderators to arrange for a return request.
*   **Deployment:** Deployed on a Virtual Private Server using Apache Tomcat, and Nginx reverse proxy.
*   **CI/CD:** Implemented with Jenkins for continuous deployment

**Performance Summary:**

*   **Total Members:** 200
*   **Daily Active Users (DAU):** 80
*   **Monthly Active Users (MAU):** 150
*  **Average daily Product Listings:** 15
*  **Average Bids per day:** 30+
*   **Average Transactions Per Day:** 3
*   **Average Moderation time:** 5 minutes per listing
*  **Average Transaction Confirmation time:** 1 day
*   **Average Report Resolution Time:** 2 days
*   **App Uptime:** 99.8%
*   **Average Server Load:** 15%

SELBi provides a secure and trusted trading experience for its members, with a focus on attracting and engaging more users to increase activity.

## 4. Architecture

**Data Flow and System Architecture:**

1.  **User Interaction (Web Browser):**
    *   Members interact with the SELBi web application through their browser.
    *   They can register, list products, bid on items, and manage transactions.

2.  **Backend API (Spring Boot):**
    *   The browser sends HTTP requests to the Spring Boot application's RESTful API endpoints.
    *   These requests include actions such as member registration, product creation, bidding, and transaction processing.
3.  **Application Server (Apache Tomcat):**
    *   Apache Tomcat hosts the Spring Boot application, which processes incoming requests.
    *   It routes requests to the appropriate controllers and services.
4.  **Security (Spring Security):**
    *  All user requests are protected by spring security.
    *  Authentication and authorization is implemented by Spring Security.
5.  **Business Logic (Spring Services):**
    *   The Spring services layer handles the core business logic, such as data validation, transaction processing, and database interactions.
6.  **Database Interaction (Spring Data JPA/Hibernate):**
    *   Spring Data JPA and Hibernate handles object-relational mapping, simplifying database interactions.
    *   Data is stored in the MySQL database based on the relational schema described earlier.
7. **Email Verification**
    *   During registration, SELBi sends a verification email to the provided work address via the Spring framework.
    *   This email contains a link that the user needs to click to verify their account before it's enabled.
8.  **Moderator Actions:**
    * Moderators perform listing approval, reveal buyer/seller contact, manage reports and arrange returns.
    * These actions are made via secured API endpoints.
`;

  return (
    <>
       <Head>
            <title>Sellbi | Sam Capuchino</title>
            <link rel ="icon" href="/sam-logo-dark.png"/>
            <meta name="description" content="Full Stack Web Developer and Software Solutions Architect" />
      </Head>
      <div className={styles.repositoryContainer}>
         <CleanHeader/>
           <div className={styles.repositoryMasthead}>
              <Image src="/projects/sellbi.png" alt="Sellbi" width={300} height={300} style={{borderRadius:"5px"}} />
            </div>
          <div className={styles.repositoryContent}>
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
                        return <h1 className={styles.repositoryTitle} {...props}></h1>;
                   },
                   h2({node, ...props}){
                       return <h2 className={styles.repositorySubtitle} {...props}></h2>;
                   },
                    h3({node, ...props}){
                        return <h3 className={styles.repositorySubSubtitle} {...props}></h3>;
                  },


               }}

              />
          </div>
          <div className={styles.repositoryFooter}>
                <p className={styles.repositoryLabel}>sam capuchino | sellbi</p>
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



export default RepositoryItem;