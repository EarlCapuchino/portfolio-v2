import styles from '../../styles/Repository.module.css';
import Image from 'next/image';
import CleanHeader from '../../components/CleanHeader';
import Head from 'next/head'
const Repository = () => {
    const projects = [
        {
            title: 'Otalku',
            type: 'social media app',
            stack: ['Flutter', 'Firebase'],
            photo: '/projects/otalku.png',
            link: 'repository/otalku',
        },
        {
            title: 'Sellbi',
            type: 'e-commerce app',
            stack: ['J2EE', 'Spring Boot', 'Apache Tomcat'],
            photo: '/projects/sellbi.png',
            link: 'repository/sellbi',
        },
        {
            title: 'TapNGet',
            type: 'quick ordering app',
            stack: ['Laravel', 'Angular', 'PHP'],
            photo: '/projects/tapnget.png',
            link: 'repository/tap-n-get',
        },
         {
            title: 'The Universe of Doom',
            type: 'desktop game',
            stack: ['JavaFX'],
            photo: '/projects/doom.png',
            link: 'repository/the-universe-of-doom',
        },
          {
            title: 'Asteris',
            type: 'grade registry app',
             stack: ['MERN'],
            photo: '/projects/asteris.png',
            link: 'https://github.com/EarlCapuchino/asteris',
        },
         {
            title: 'Notifly',
            type: 'persistent notification app',
            stack: ['MongoDB Atlas', 'Express', 'React', 'Node', 'Selenium'],
             photo: '/projects/notifly.png',
             link: 'https://github.com/EarlCapuchino/notifly',
        },
    ];


    return (
        <>
            <Head>
            <title>Repository | Sam Capuchino</title>
            <link rel ="icon" href="/sam-logo-dark.png"/>
            <meta name="description" content="Full Stack Web Developer and Software Solutions Architect" />
            </Head>
            <section className={`${styles.repositorySection}`}>
                <div className={styles.repositoryContainer}>
                <CleanHeader/>
                    <h2 color="red" className={styles.sectionTitle}>/ repository</h2>
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

                </div>
            </section>
        </>
    );
};

export default Repository;