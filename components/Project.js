import styles from '../styles/Project.module.css';
import Image from 'next/image';
const Projects = () => {

    const projects = [
        {
            title: 'ENCER',
            type: 'medicinal e-commerce web',
            stack: ['WordPress', 'Elementor', 'Bit Integration Pro', 'Stripe', 'PHP'],
             image: '/preview.png',
             link: 'https://www.bringbackph.shop/',
        },
        {
            title: 'FLASH MOTORS',
             type: 'automotive website',
             stack: ['Python', 'Selenium', 'PyTest', 'Allure', 'Locust', 'Asana', 'Confluence'],
              image: '/preview.png',
              link: 'https://www.bringbackph.shop/',
         },
         {
            title: 'BRINGBACK',
            type: 'QR code repository service',
             stack: ['NodeJS', 'ExpressJS', 'ReactJS', 'AWS EC2', 'RDS', 'S3', 'ELB', 'PayMaya', 'Jenkins'],
             image: '/preview.png',
              link: 'https://www.bringbackph.shop/',
        },
        {
           title: 'PAYSHIPGO',
            type: 'payment and shipping integration services',
             stack: ['OAuth', 'PostgreSQL', 'AWS', 'Payment APIs', 'Shipping APIs'],
             image: '/preview.png',
             link: 'https://www.bringbackph.shop/',
        },
        {
            title: 'TICKET-TAKA',
             type: 'online ticketing service',
             stack: ['WordPress', 'Elementor'],
             image: '/preview.png',
             link: 'https://www.bringbackph.shop/',
         },
        {
            title: 'OTALKU',
            type: 'social media app',
            stack: ['Flutter', 'Firebase'],
            image: '/preview.png',
             link: 'https://www.bringbackph.shop/',
        },
        {
           title: 'SELLBI',
           type: 'e-commerce app',
           stack: ['J2EE', 'Spring Boot', 'Apache Tomcat'],
            image: '/preview.png',
            link: 'https://www.bringbackph.shop/',
        },
        {
            title: 'TAPnGET',
            type: 'quick ordering app',
             stack: ['Laravel', 'Angular', 'PHP'],
             image: '/preview.png',
            link: 'https://www.bringbackph.shop/',
        },
         {
            title: 'THE UNIVERSE OF DOOM',
             type: 'desktop game',
              stack: ['JavaFX'],
             image: '/preview.png',
              link: 'https://www.bringbackph.shop/',
         },
        {
            title: 'ASTERIS',
            type: 'grade registry app',
             stack: ['MERN'],
              image: '/preview.png',
            link: 'https://www.bringbackph.shop/',
        },
        {
            title: 'NOTIFLY',
             type: 'persistent notification app',
            stack: ['MongoDB Atlas', 'Express', 'React', 'Node', 'Selenium'],
             image: '/preview.png',
             link: 'https://www.bringbackph.shop/',
         },
    ];

    return (
       <section className={styles.projectsSection}>
          <div className={styles.projectsContainer}>
            <h2 className={styles.sectionTitle}>Projects</h2>
              <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                   <a key={index} href={project.link} className={styles.projectCard} target="_blank" rel="noopener noreferrer">
                        <div className={styles.projectImage}>
                           <Image src={project.image} alt={project.title} width={300} height={200} style={{borderRadius:"5px"}} />
                        </div>
                        <div className={styles.projectDetails}>
                            <h3 className={styles.projectTitle}>{project.title}</h3>
                             <p className={styles.projectType}>Type: {project.type}</p>
                              <div className={styles.projectStack}>
                               {project.stack.map((item, i) => (
                                   <span key={i} className={styles.stackItem}>{item}</span>
                               ))}
                             </div>
                       </div>
                    </a>
                ))}
             </div>
          </div>
        </section>
    );
};

export default Projects;