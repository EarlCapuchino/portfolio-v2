import Head from 'next/head';
import Header from '../components/Header';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Project';
import Contact from '../components/Contact';
import Blogs from '../components/Blogs';
import styles from '../styles/Home.module.css';
import { useState, useEffect, useRef } from 'react';


const Home = () => {
    const greetings = ["Hello!","Hola!","Ni hao!","Bonjour!","Olá!","Namaste!","Guten Tag!","Konnichiwa!","Privet!","Salam!","Kumusta!"];
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [displayText, setDisplayText] = useState("HEY!");
    const [wipeUp, setWipeUp] = useState(false);
    const intervalRef = useRef(null);
     const titleRef = useRef(null);


     useEffect(() => {
        const animateGreeting = () => {
                setWipeUp(true);
              setTimeout(() => {
                    setDisplayText(greetings[greetingIndex]);
                    setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
                     setWipeUp(false);
                }, 450)
        };

         intervalRef.current = setInterval(animateGreeting, 450)


       return () => clearInterval(intervalRef.current)
    }, [greetings,greetingIndex]);


    return (
        <div>
            <Head>
                <title>Sam Capuchino | Software Engineer</title>
                <link rel ="icon" href="/sam-logo-dark.png"/>
                <meta name="description" content="Full Stack Web Developer and Software Solutions Architect" />
            </Head>
            <Header />
            <main>
                <section id="home" className={styles.homeSection}>
                    <div className={styles.homeContent}>
                        <div className={styles.leftContent}>
                          <h1
                              className={`${styles.mainTitle} ${wipeUp ? styles.wipeUp : ''}`}
                            >
                            {displayText}<br/>
                            I'M SAM CAPUCHINO
                            </h1>
                            <div className={styles.subTitleContainer}>
                                <h2 className={styles.subTitle}>Software Engineer/Full Stack Web Developer</h2>
                            </div>
                            <button className={styles.button}>
                                  <a href="https://calendly.com/samcapuchino/application-interview" target="_blank" rel="noopener noreferrer">
                                      Let us meet through an interview!
                                  </a>
                            </button>
                        </div>
                        <div className={styles.rightContent}>
                            <p className={styles.paragraph}>
                                I am a software engineer with <span className={styles.highlight}>five years</span> of experience specializing in the full lifecycle of software development, encompassing
                                <span className={styles.highlight}>project management</span>, API design, system architecture, QA testing, and automation.
                                I bring a strategic perspective to the creation of
                                <span className={styles.highlight}>e-commerce solutions</span> and <span className={styles.highlight}>SAAS</span>. I'm skilled in deploying
                                <span className={styles.highlight}>cross-platform applications</span> across diverse tech stacks via <span className={styles.highlight}>AWS</span> and other
                                <span className={styles.highlight}>CMS</span> platform.
                            </p>
                        </div>
                    </div>
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="experience">
                    <Experience />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <section id="blogs">
                    <Blogs />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
        </div>
    );
};
export default Home;