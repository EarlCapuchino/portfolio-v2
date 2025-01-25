import styles from '../styles/Experience.module.css';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const Experience = () => {
    const experiences = [
        {
            date: 'SEPTEMBER 2024 - JANUARY 2025',
            company: '360-365 Marketing OPC',
            position: 'Full Stack Developer',
            image: '/projects/360.jpeg',
            link: 'https://www.linkedin.com/company/360-365-marketing/',
            stack: 'Zoho One, Deluge, Python, Selenium, Stripe, FCP, WooCommerce, Yoast SEO',
            description: `Implemented end-to-end CRM solutions using Zoho CRM, Zoho Creator, Zoho Books, Zoho Invoice, Zoho Flow, Deluge, and APIs, including custom views and integration with Stripe and shipping providers like USPS and FCP. Developed 50+ custom Deluge Scripts processing 450+ annual transactions and synced 300+ customer records. Monitored WordPress site with 20+ plugins using PHP, WooCommerce, Elementor, and Bit Integration Pro.`
        },
        {
            date: 'SEPTEMBER 2023 - JULY 2024',
            company: 'Institute of Computer Science, UPLB',
            position: 'Instructor V',
            image: '/projects/ics.png',
            link: 'https://ics.uplb.edu.ph/',
            stack: 'C, Java, Linux, Python, Docker, Trello, MariaDB',
            description: `- Subjects taught: Software Engineering, Java Programming, Web Development, Operating Systems, Digital Circuits
            - Handled 16 laboratory classes of over 270 students. Studied over 7 tech stacks and over 10 programming languages
            - 4.97/5 rating excellent performance, top instructor`
        },
        {
            date: 'JANUARY 2023 - JANUARY 2025',
            company: 'BringBack PH',
            position: 'Project Manager',
            image: '/projects/bringback.png',
            link: 'https://www.bringbackph.shop/',
            stack: 'NodeJS,ExpressJS,ReactJS,  AWS EC2, RDS, S3, ELB, PayMaya, Jenkins',
            description: `- Built 25+ RESTful APIs (Node.js, Express.js), a scalable MySQL database (AWS RDS), and a responsive ReactJS UI with dynamic QR codes, integrating key features like authentication and payment gateways (Stripe, PayMaya).
            - Designed to handle up to  1200+ users and 5000+ sales`
        },
        {
            date: 'AUGUST 2021 - FEBRUARY 2023',
            company: 'PayShipGo',
            position: 'Project Manager',
            image: '/projects/payshipgo.png',
            link: 'https://www.payshipgo.com',
            stack: 'OAuth, PostgreSQL, AWS, Payment APIs, Shipping APIs',
            description: `- Developed 150+ robust RESTful APIs  to integrate multiple Philippine payment gateways (PesoPay, Dragonpay, PayPal, GCash) and shipping services (LBC, J&T, 2GO, Flash Express), enabling core functionalities like payment processing, shipping calculations, and tracking.
            - Conducted initial research and compatibility testing for 10+ payment/shipping APIs, designed a modular architecture, and implemented a scalable microservices architecture for the platform; deploying on AWS (EC2, ELB, RDS).`
        },
    ];

    const educations = [
        {
            school: 'University of the Philippines, Los Baños',
            course: 'BS Computer Science',
             image: '/projects/uplb.png',
            distinction: 'Summa Cum Laude',
            description: `UPCAT 2019 Top 1 - Departmentals (ABME)
             DOST Scholar, Iskolar ng Laguna`
        }
    ];
    const [expandedIndex, setExpandedIndex] = useState(null);

   const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };
    return (
        <section className={styles.experienceSection}>
            <div className={styles.experienceContainer}>
                <h2 className={styles.sectionTitle}>/ experience</h2>
                 <h3 className={styles.experienceSubtitle}>employment</h3>
                <div className={styles.experienceList}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.experienceItem}>
                            <div className={styles.experienceHeader} onClick={() => handleToggle(index)}>
                                <div className={styles.imageContainer}>
                                    <Image src={exp.image} alt={exp.company} width={100} height={100} style={{borderRadius: "5px"}} />
                                </div>
                                <div className={styles.experienceDetails}>
                                    <h4 className={styles.companyTitle}>{exp.company}</h4>
                                    <p className={styles.positionTitle}>{exp.position}</p>
                                     <p className={styles.date}>{exp.date}</p>
                                </div>
                                <span className={styles.expandIcon}>
                                    {expandedIndex === index ? <AiOutlineUp /> : <AiOutlineDown />}
                                </span>
                            </div>
                            {expandedIndex === index && (
                                <div className={styles.experienceContent}>
                                     <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>{exp.link}</a>
                                    <p className={styles.description}> {exp.description} </p>
                                    <p className={styles.stack}>
                                        <span className={styles.stackTitle}>Stack:</span> {exp.stack}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <h3 className={styles.experienceSubtitle}>education</h3>
                   <div className={styles.educationList}>
                    {educations.map((edu, index) => (
                        <div key={index} className={styles.educationItem}>
                            <div className={styles.educationHeader}>
                                 <div className={styles.imageContainer}>
                                    <Image src={edu.image} alt={edu.school} width={100} height={100} style={{borderRadius: "5px"}} />
                                </div>
                                 <div className={styles.educationDetails}>
                                      <h4 className={styles.schoolTitle}>{edu.school}</h4>
                                        <p className={styles.courseTitle}>{edu.course}</p>
                                   <p className={styles.distinction}>{edu.distinction}</p>
                                </div>
                            </div>
                             <div className={styles.educationContent}>
                                    <p className={styles.description}>{edu.description}</p>
                                </div>
                        </div>
                    ))}
                  </div>
            </div>
        </section>
    );
};

export default Experience;