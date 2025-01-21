import styles from '../styles/Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
           <div className={styles.contactContainer}>
                <h2 className={styles.sectionTitle}>Contact</h2>
                 <p className={styles.placeholder}>This is a placeholder for the contact section. Please add the actual contact details here.</p>
           </div>
        </section>
    );
};

export default Contact;