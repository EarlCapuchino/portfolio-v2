import styles from '../styles/Skills.module.css';
import {
    FaJs,
    FaReact,
    FaNodeJs,
    FaJava,
    FaPython,
    FaPhp,
    FaHtml5,
    FaCss3,
    FaWordpress,
    FaDatabase,
    FaMobile,
    FaDocker,
    FaGitAlt,
    FaJira,
    FaFigma,
    FaAws
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiNextdotjs, SiAngular, SiVueDotJs, SiLaravel, SiJquery, SiRedux, SiBootstrap, SiMariadb, SiMongodb, SiPostgresql, SiGraphql, SiFlutter, SiDart, SiKubernetes, SiAzure, SiTerraform, SiVercel, SiNpm, SiTrello, SiClickup, SiAsana, SiSelenium, SiMocha, SiAdobe, SiCanva, SiShopify} from "react-icons/si";
const Skills = () => {
   const programmingLanguages = [
        {name: 'JavaScript', icon: <FaJs size={30} color="var(--red-secondary)"/>},
        {name: 'TypeScript', icon: <SiTypescript size={30} color="var(--red-secondary)"/>},
        {name: 'C', icon: <SiTypescript size={30} color="var(--red-secondary)"/>},
        {name: 'Java', icon: <FaJava size={30} color="var(--red-secondary)"/>},
        {name: 'Python', icon: <FaPython size={30} color="var(--red-secondary)"/>},
        {name: 'PHP', icon: <FaPhp size={30} color="var(--red-secondary)"/>},
    ];

  const skillsData = [
        {
          title: 'CRM',
          items: ['WordPress', 'Elementor', 'WP-admin', 'FCP e-fulfillment Services', 'Zoho One (CRM, Books, Invoice, Flow)'],
        },
        {
          title: 'Web Development',
          items: ['ReactJS', 'ExpressJS', 'NodeJS', 'NextJS', 'Angular', 'Vue', 'Laravel', 'JQuery', 'Ajax', 'Bootstrap', 'Redux', 'Axios', 'J2EE', 'Spring Boot', 'IBM WAS', 'Apache Tomcat', 'WordPress', 'Shopify', 'Yoast SEO', 'WooCommerce', 'Stripe Payment', 'HTML5', 'XML', 'XSL', 'CSS3', 'Sass'],
        },
        {
          title: 'Cloud Services',
          items: ['Amazon Web Services: EC2, S3, RDS, IAM'],
        },
        {
          title: 'Databases',
           items: ['MariaDB', 'SQLite', 'PostgreSQL', 'MongoDB', 'Oracle SQL', 'Apollo GraphQL'],
        },
         {
            title: 'Mobile Development',
           items: ['Flutter', 'Dart', 'Firebase'],
        },
        {
            title: 'DevOps',
            items: ['Docker', 'Kubernetes', 'Azure', 'Terraform', 'Vercel'],
         },
         {
            title: 'Tools',
           items: ['Git', 'NPM'],
        },
        {
          title: 'Project Management Tools',
          items: ['JIRA', 'Trello', 'ClickUp', 'Asana'],
        },
        {
          title: 'Testing/Automation',
          items: ['Mocha', 'Selenium', 'Allure', 'PyTest'],
        },
        {
            title: 'UI/UX Design',
             items: ['JavaFX', 'FXML', 'PyGames', 'Tkinter', 'RShiny', 'Figma', 'Adobe XD', 'Canva', 'Adobe Photoshop', 'Illustrator'],
         },
      ];

    return (
    <section className={styles.skillsSection}>
            <div className={styles.skillsContainer}>
                <h2 className={styles.sectionTitle}>Skills</h2>
               <div className={styles.programmingLanguages}>
                  <h3 className={styles.subTitle}>Programming Languages</h3>
                  <div className={styles.languageIcons}>
                    {programmingLanguages.map((lang, index) => (
                       <span key={index} className={styles.languageIcon} title={lang.name}>{lang.icon}</span>
                    ))}
                  </div>
               </div>
            <div className={styles.skillsGrid}>
              {skillsData.map((skill, index) => (
                  <div key={index} className={styles.skillGroup}>
                     <h3 className={styles.subTitle}>{skill.title}</h3>
                     <div className={styles.skillItems}>
                      {skill.items.map((item, i) => (
                            <span key={i} className={styles.skillItem}>{item}</span>
                        ))}
                     </div>
                    </div>
                    ))}
             </div>
          </div>
    </section>
  );
};

export default Skills;