import styles from '../styles/Education.module.css';
const Education = () => {
    return (
      <section className={styles.educationSection}>
        <div className={styles.educationContainer}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.placeholder}>
           This is a placeholder for the education section. Please add the actual educational details here.
          </p>
       </div>
      </section>
    );
};

export default Education;