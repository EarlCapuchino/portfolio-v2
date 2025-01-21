import Header from '../components/Header';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Project';
import Contact from '../components/Contact';
import Education from '../components/Education'
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
      <div>
          <Header/>
            <main>
              <section id="home" className={styles.homeSection}>
                <div className={styles.homeContent}>
                   <h1 className={styles.mainTitle}>HEY! I'M SAM CAPUCHINO</h1>
                    <h2 className={styles.subTitle}>Software Engineer/Full Stack Web Developer</h2>
                     <p className={styles.paragraph}>
                     I am a software engineer with five years of experience specializing in the full lifecycle of software development, encompassing project management, API design, system architecture, QA testing, and automation. I bring a strategic perspective to the creation of e-commerce solutions and am skilled in deploying cross-platform applications across diverse tech stacks via AWS and other CMS platforms.
                     </p>
                     <button className={styles.button}>
                       <a href="https://calendly.com/samcapuchino/application-interview" target="_blank" rel="noopener noreferrer">
                          Let us meet through an interview!
                       </a>
                    </button>
                </div>
              </section>

               <section id="skills">
                   <Skills />
               </section>
                 <section id="experience">
                   <Experience/>
                </section>
                  <section id="projects">
                   <Projects />
                  </section>
                  <section id="education">
                      <Education />
                  </section>
                 <section id="contact">
                   <Contact />
                 </section>
           </main>
     </div>
    );
};
export default Home;