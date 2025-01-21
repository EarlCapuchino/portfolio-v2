import styles from '../styles/Experience.module.css';
import Image from 'next/image';
const Experience = () => {
    const experiences = [
           {
            date: 'SEPTEMBER 2024 - JANUARY 2025',
            company: '360-365 Marketing OPC',
             position: 'Full Stack Developer',
             image: '/image.png',
            link: 'https://www.bringbackph.shop/',
           stack: 'Zoho One, Deluge, Python, Selenium, Stripe, FCP, WooCommerce, Yoast SEO',
            description: `Designed and implemented end-to-end CRM solutions using Zoho CRM, Zoho Creator, Zoho Books, Zoho Invoice, Zoho Flow, Deluge, and APIs, including custom views and integration with Stripe and shipping providers; also developed 50+ custom Deluge Scripts processing 450+ annual transactions.
            Engineered automated workflows using Zoho Books, Invoice, and Flow, reducing invoice processing time by 75% and improving accuracy to 99.8%.
            Managed WooCommerce and integrated Stripe, processing 450+ annual transactions, developed Forminator forms, maintained 20+ plugins using PHP, and synced 300+ customer records via Bit Integration Pro.
            Monitored 30+ landing pages built with Elementor, achieving 98% mobile compatibility, and optimized SEO with Yoast.
            Led end-to-end QA for an e-commerce platform, developing automated test suites with Selenium and Python, achieving 85% coverage, and maintained documentation using Confluence and JIRA.
            Implemented PyTest, Robot Framework, Allure and Locust, reducing testing time by 70%, improving defect detection by 45%, and utilizing Jenkins for CI/CD.`
           },
           {
            date: 'SEPTEMBER 2023 - JULY 2024',
             company: 'University of the Philippines, Los Baños',
             position: 'Instructor',
              image: '/image.png',
             link: 'https://www.bringbackph.shop/',
            stack: 'C, Java, Linux, Python, Docker, Trello, MariaDB',
            description: `Subjects taught: Software Engineering, Java Programming, Web Development, Operating Systems, Digital Circuits
            Handled 16 laboratory classes of over 270 students. Studied over 7 tech stacks and over 10 programming languages
            4.97/5 rating excellent performance, top instructor`
          },
          {
             date: 'JANUARY 2023 - JANUARY 2025',
            company: 'BringBack PH',
            position: 'Project Manager',
             image: '/image.png',
            link: 'https://www.bringbackph.shop/',
             stack: 'NodeJS,ExpressJS,ReactJS,  AWS EC2, RDS, S3, ELB, PayMaya, Jenkins',
            description: `Built 25+ RESTful APIs (Node.js, Express.js), a scalable MySQL database (AWS RDS), and a responsive ReactJS UI with dynamic QR codes, integrating key features like authentication and payment gateways (Stripe, PayMaya).
            Deployed application on AWS (EC2, RDS, S3, ELB) with load balancing, and implemented a CI/CD pipeline (Jenkins) for automated deployments.
            Led project using Agile/Scrum methodology, achieving 85% sprint completion.
           Implemented automated testing (85%+ code coverage), resolved 150+ bugs, and designed the application for scalability on AWS.
           Designed to handle up to  1200+ users and 5000+ sales`
         },
           {
            date: 'AUGUST 2021 - FEBRUARY 2023',
           company: 'PayShipGo',
             position: 'Project Manager',
            image: '/image.png',
            link: 'https://www.bringbackph.shop/',
            stack: 'OAuth, PostgreSQL, AWS, Payment APIs, Shipping APIs',
             description: `Developed 150+ robust RESTful APIs (Node.js, Express.js) to integrate multiple Philippine payment gateways (PesoPay, Dragonpay, PayPal, GCash) and shipping services (LBC, J&T, 2GO, Flash Express), enabling core functionalities like payment processing, shipping calculations, and tracking.
            Implemented a secure OAuth 2.0 authentication and authorization system across all API endpoints, safeguarding sensitive transaction data and managing third-party access.
            Created a normalized PostgreSQL database schema (20+ tables) optimized for transactional data, utilizing AWS RDS for enhanced scalability and performance.
            Conducted initial research and compatibility testing for 10+ payment/shipping APIs, designed a modular architecture, and implemented a scalable microservices architecture for the platform; deploying on AWS (EC2, ELB, RDS).
           Implemented comprehensive testing strategies, achieving 85%+ code coverage, and performed QA for all payment and shipping API integrations`
         },
        ];
    return (
       <section className={styles.experienceSection}>
           <div className={styles.experienceContainer}>
            <h2 className={styles.sectionTitle}>Experience</h2>
               <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineContent}>
                           <div className={styles.imageContainer}>
                              <Image src={exp.image} alt={exp.company} width={150} height={150} style={{borderRadius:"5px"}} />
                            </div>
                            <div className={styles.experienceDetails}>
                              <h3 className={styles.date}>{exp.date}</h3>
                             <h4 className={styles.company}>{exp.company}</h4>
                               <h5 className={styles.position}>{exp.position}</h5>
                                 <p className={styles.stack}>{exp.stack}</p>
                                 <ul className={styles.descriptionList}>
                                      {exp.description.split('\n').map((line, i) => (
                                            <li key={i} className={styles.descriptionItem}>
                                                  {line}
                                             </li>
                                       ))}
                                </ul>
                                 <a href={exp.link} className={styles.learnMore} target="_blank" rel="noopener noreferrer">Learn More</a>
                             </div>
                       </div>
                    </div>
                 ))}
               </div>
           </div>
        </section>
    );
};

export default Experience;