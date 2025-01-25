import styles from '../styles/Project.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
    const projects = [
        {
            title: 'Encer',
            type: 'medicinal e-commerce web',
            stack: ['WordPress', 'Elementor', 'Bit Integration Pro', 'Stripe', 'PHP'],
            photo: '/projects/encer.png',
            link: 'https://www.encer.store/',
        },
        {
            title: 'Flash Motors',
            type: 'automotive website',
            stack: ['Python', 'Selenium', 'PyTest', 'Allure', 'Locust', 'Asana', 'Confluence'],
            photo: '/projects/flash.png',
            link: 'https://flashmotors.com/infinity-scooters/',
        },
        {
            title: 'BringBack',
            type: 'QR code repository service',
            stack: ['NodeJS', 'ExpressJS', 'ReactJS', 'AWS EC2', 'RDS', 'S3', 'ELB', 'PayMaya', 'Jenkins'],
            photo: '/projects/bringback.png',
            link: 'https://www.bringbackph.shop/',
        },
        {
            title: 'PayShipGo',
            type: 'payment and shipping integration services',
            stack: ['OAuth', 'PostgreSQL', 'AWS', 'Payment APIs', 'Shipping APIs'],
            photo: '/projects/payshipgo.png',
            link: 'https://www.payshipgo.com/',
        },
        {
            title: 'Ticket-Taka',
            type: 'online ticketing service',
            stack: ['WordPress', 'Elementor'],
            photo: '/projects/tickettaka.png',
            link: 'https://ticket-taka.com/',
        },
    ];


    return (
        <section className={styles.projectsSection}>
            <div className={styles.projectsContainer}>
                <h2 color="red" className={styles.sectionTitle}>/ projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <a key={index} href={project.link} className={styles.projectCard} target="_blank" rel="noopener noreferrer">
                            <div className={styles.projectImage}>
                                <Image src={project.photo} alt={project.title} width={300} height={300} style={{borderRadius:"5px"}} />
                            </div>
                            <div className={styles.projectDetails}>
                                <span className={styles.projectTitle}>{project.title}</span>
                                <p className={styles.projectType}>
                                    {project.type}
                                </p>
                                <div className={styles.projectStack}>
                                    {project.stack.map((item, i) => (
                                        <span key={i} className={styles.stackItem}>{item}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                 <div className={styles.olderProjectsLinkContainer}>
                      <Link href="/repository" className={styles.olderProjectsLink}>
                           / see older projects
                      </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;