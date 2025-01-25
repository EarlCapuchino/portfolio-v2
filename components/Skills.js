import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Skills.module.css';
import { FaJs, FaJava, FaPython, FaPhp, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJira, FaFigma, FaHtml5, FaCss3, FaWordpress, FaElementor, FaCcStripe, FaDatabase, FaUsps, FaYoast } from 'react-icons/fa';
import { SiPytest, SiApachetomcat, SiTypescript, SiExpress, SiNextdotjs, SiAngular, SiVuedotjs, SiLaravel, SiJquery, SiBootstrap, SiRedux, SiAxios, SiMariadb, SiPostgresql, SiMongodb, SiGraphql, SiFlutter, SiDart, SiKubernetes, SiTerraform, SiVercel, SiNpm, SiTrello, SiClickup, SiAsana, SiMocha, SiSelenium, SiAdobe, SiCanva, SiShopify, SiWoocommerce, SiSpringboot, SiSass, SiZoho } from 'react-icons/si';
import { TbCircleLetterCFilled, TbBrandFirebase, TbBrandWordpress, TbFileTypeXml, TbCircleLetterAFilled, TbCircleLetterRFilled } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';


const skillsData = [
    {
        title: 'Web Development',
        skills: [
            { name: 'ReactJS', icon: <FaReact size="2rem" /> },
            { name: 'ExpressJS', icon: <SiExpress size="2rem" /> },
            { name: 'NodeJS', icon: <FaNodeJs size="2rem" /> },
            { name: 'NextJS', icon: <SiNextdotjs size="2rem" /> },
            { name: 'Angular', icon: <SiAngular size="2rem" /> },
            { name: 'Vue', icon: <SiVuedotjs size="2rem" /> },
            { name: 'Laravel', icon: <SiLaravel size="2rem" /> },
            { name: 'JQuery', icon: <SiJquery size="2rem" /> },
             { name: 'Ajax', icon: <SiJquery size="2rem" /> },
             { name: 'WordPress', icon: <FaWordpress size="2rem" /> },
            { name: 'Elementor', icon: <FaElementor size="2rem" /> },
            { name: 'WP-admin', icon: <TbBrandWordpress size="2rem" /> },
            { name: 'Bootstrap', icon: <SiBootstrap size="2rem" /> },
            { name: 'Redux', icon: <SiRedux size="2rem" /> },
            { name: 'Axios', icon: <SiAxios size="2rem" /> },
             { name: 'J2EE', icon: <FaJava size="2rem" /> },
            { name: 'Spring Boot', icon: <SiSpringboot size="2rem" /> },
             { name: 'IBM WAS', icon: <FaJava size="2rem" /> },
             { name: 'Apache Tomcat', icon: <SiApachetomcat size="2rem" /> },
            { name: 'Shopify', icon: <SiShopify size="2rem" /> },
            { name: 'Yoast SEO', icon: <FaYoast size="2rem" /> },
            { name: 'WooCommerce', icon: <SiWoocommerce size="2rem" /> },
            { name: 'Stripe', icon: <FaCcStripe size="2rem" /> },
             { name: 'HTML5', icon: <FaHtml5 size="2rem" /> },
             { name: 'XML', icon: <TbFileTypeXml size="2rem" /> },
            { name: 'CSS3', icon: <FaCss3 size="2rem" /> },
            { name: 'Sass', icon: <SiSass size="2rem" /> },
        ],
    },
    {
        title: 'Programming Languages',
        skills: [
            { name: 'JavaScript', icon: <FaJs size="2rem" /> },
            { name: 'TypeScript', icon: <SiTypescript size="2rem" /> },
            { name: 'C', icon: <TbCircleLetterCFilled size="2rem" /> },
            { name: 'Java', icon: <FaJava size="2rem" /> },
            { name: 'Python', icon: <FaPython size="2rem" /> },
            { name: 'PHP', icon: <FaPhp size="2rem" /> },
        ],
    },
    {
        title: 'Cloud Services',
        skills: [
            { name: 'AWS EC2, S3, RDS, IAM', icon: <FaAws size="2rem" /> },
        ],
    },
    {
        title: 'Databases',
        skills: [
            { name: 'MariaDB', icon: <SiMariadb size="2rem" /> },
            { name: 'SQLite', icon: <FaDatabase size="2rem" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql size="2rem" /> },
            { name: 'MongoDB', icon: <SiMongodb size="2rem" /> },
             { name: 'Oracle SQL', icon: <SiPostgresql size="2rem" /> },
            { name: 'Apollo GraphQL', icon: <SiGraphql size="2rem" /> },
        ],
    },
     {
        title: 'Mobile Development',
        skills: [
            { name: 'Flutter', icon: <SiFlutter size="2rem" /> },
            { name: 'Dart', icon: <SiDart size="2rem" /> },
             { name: 'Firebase', icon: <TbBrandFirebase size="2rem" /> },
        ],
    },
    {
        title: 'DevOps',
        skills: [
            { name: 'Docker', icon: <FaDocker size="2rem" /> },
            { name: 'Kubernetes', icon: <SiKubernetes size="2rem" /> },
            { name: 'Azure', icon: <VscAzure size="2rem" /> },
            { name: 'Terraform', icon: <SiTerraform size="2rem" /> },
             { name: 'Vercel', icon: <SiVercel size="2rem" /> },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', icon: <FaGitAlt size="2rem" /> },
           { name: 'NPM', icon: <SiNpm size="2rem" /> },
        ],
    },
    {
        title: 'Project Management Tools',
        skills: [
            { name: 'JIRA', icon: <FaJira size="2rem" /> },
             { name: 'Trello', icon: <SiTrello size="2rem" /> },
            { name: 'ClickUp', icon: <SiClickup size="2rem" /> },
            { name: 'Asana', icon: <SiAsana size="2rem" /> },
        ],
    },
    {
          title: 'Testing/Automation',
        skills: [
            { name: 'Mocha', icon: <SiMocha size="2rem" /> },
            { name: 'Selenium', icon: <SiSelenium size="2rem" /> },
             { name: 'Allure', icon: <TbCircleLetterAFilled size="2rem" /> },
            { name: 'PyTest', icon: <SiPytest size="2rem" /> },
        ],
    },
     {
        title: 'UI/UX Design',
        skills: [
            { name: 'JavaFX', icon: <FaJava size="2rem" /> },
            { name: 'FXML', icon: <FaJava size="2rem" /> },
             { name: 'PyGames', icon: <FaPython size="2rem" /> },
            { name: 'Tkinter', icon: <FaPython size="2rem" /> },
             { name: 'RShiny', icon: <TbCircleLetterRFilled size="2rem" /> },
             { name: 'Figma', icon: <FaFigma size="2rem" /> },
             { name: 'Adobe Photoshop, Illustrator, XD', icon: <SiAdobe size="2rem" /> },
            { name: 'Canva', icon: <SiCanva size="2rem" /> },

        ],
    },
    {
        title: 'CRM',
        skills: [

            { name: 'FCP/USPS', icon: <FaUsps size="2rem" /> },
            { name: 'Zoho One', icon: <SiZoho size="2rem" /> },
        ],
    },
];

const Skills = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);
    const [skillAnimations, setSkillAnimations] = useState({});
    const touchStart = useRef(0);
    const touchEnd = useRef(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current && !isMobile) {
                const carouselTop = carouselRef.current.offsetTop;
                const windowBottom = window.scrollY + window.innerHeight;

                if (windowBottom > carouselTop ) {
                    animateSkills(currentSlide);
                }
            } else if (carouselRef.current && isMobile){
                animateAllSkills();
            }
        };
         window.addEventListener('scroll', handleScroll);
         handleScroll();
          return () => window.removeEventListener('scroll', handleScroll);

    },[currentSlide, isMobile]);

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide > 0 ? prevSlide - 1 : skillsData.length - 1));
         setSkillAnimations({});
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide < skillsData.length - 1 ? prevSlide + 1 : 0));
        setSkillAnimations({});
    };

     const handleTouchStart = (e) => {
        touchStart.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEnd.current = e.touches[0].clientX;
    };


    const handleTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const swipeDistance = touchStart.current - touchEnd.current;

         if (swipeDistance > 50) {
            goToNextSlide();
        }
         if (swipeDistance < -50) {
            goToPreviousSlide();
        }

        touchStart.current = 0;
        touchEnd.current = 0;
    };

     const animateAllSkills = () => {
          const newAnimations = {};
          skillsData.forEach((category) => {
               category.skills.forEach((_, index) => {
                    newAnimations[index] = true;
               });
          });
         setSkillAnimations(newAnimations);
     };


    const animateSkills = (slideIndex) => {
        const newAnimations = {};
        skillsData[slideIndex].skills.forEach((_, index) => {
            newAnimations[index] = true;
        });
        setSkillAnimations(newAnimations);
    };

    return (
        <section className={styles.skillsSection} ref={carouselRef}>
            <div className={styles.skillsContainer}
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd} >
                <h2 className={styles.skillsTitle}>/ skills</h2>
                  {isMobile ? (
                      <div className={styles.skillsGrid}>
                        {skillsData.map((category, categoryIndex) => (
                              <div key={categoryIndex}>
                                    <h3 className={styles.skillCategoryTitleMobile}>{category.title}</h3>
                                <ul className={styles.skillListMobile}>
                                        {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className={`${styles.skillItemMobile} ${skillAnimations[skillIndex] ? styles.animate : ''}`} style={{transitionDelay: `${0.05 * skillIndex}s`}}>
                                                <div className={styles.skillIconMobile}>{skill.icon}</div>
                                        <span className={styles.skillNameMobile}>{skill.name}</span>
                                </li>
                            ))}
                                </ul>
                                  </div>
                          ))}
                        </div>
                ) : (
                 <>
                <div className={styles.carousel} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {skillsData.map((category, index) => (
                        <div key={index} className={styles.slide}>
                            <h3 className={styles.skillCategoryTitle}>{category.title}</h3>
                            <ul className={styles.skillList}>
                                {category.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex} className={`${styles.skillItem} ${skillAnimations[skillIndex] ? styles.animate : ''}`} style={{transitionDelay: `${0.05 * skillIndex}s`}}>
                                        <div className={styles.skillIcon}>{skill.icon}</div>
                                        <span className={styles.skillName}>{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                  <button className={`${styles.arrowButton} ${styles.prevButton}`} onClick={goToPreviousSlide}>
                    ‹
                </button>
                <button className={`${styles.arrowButton} ${styles.nextButton}`} onClick={goToNextSlide}>
                    ›
                </button>
                </>
              )}
            </div>
        </section>
    );
};

export default Skills;