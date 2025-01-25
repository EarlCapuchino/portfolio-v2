import styles from '../styles/Contact.module.css';
import { IoIosRadioButtonOn } from 'react-icons/io';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactContainer}>
                <h2 className={styles.sectionTitle}>/ contact</h2>
                <div className={styles.statusContainer}>
                      <span className={styles.status}>Status: Looking for a Job</span>
                       <IoIosRadioButtonOn className={styles.statusLight} size="1em" />
                </div>
                <ul className={styles.contactList}>
                    <li>
                        <a href="https://github.com/EarlCapuchino" target="_blank" rel="noopener noreferrer">
                            <span className={styles.contactIcon}><FaGithub size="1.3em" /></span>
                            https://github.com/EarlCapuchino
                        </a>
                    </li>
                     <li>
                        <a href="mailto:earlcapuchino@gmail.com" >
                             <span className={styles.contactIcon}><FaEnvelope size="1.3em" /></span>
                            earlcapuchino@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/earl-samuel-capuchino/" target="_blank" rel="noopener noreferrer">
                           <span className={styles.contactIcon}><FaLinkedin size="1.3em" /></span>
                            https://www.linkedin.com/in/earl-samuel-capuchino/
                        </a>
                    </li>
                    <li>
                        <a href="tel:+639611046081" >
                             <span className={styles.contactIcon}><FaPhone size="1.3em" /></span>
                             +63 961-104-6081
                        </a>
                    </li>
                </ul>
                <button className={styles.button}>
                    <a href="https://calendly.com/samcapuchino/application-interview" target="_blank" rel="noopener noreferrer">
                      Let's Talk!
                    </a>
                </button>
            </div>
        </section>
    );
};

export default Contact;