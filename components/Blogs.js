import styles from '../styles/Blogs.module.css';

const blogData = [
    { title: 'Starting Cloud Computing with AWS', date: 'Mar 04, 2024', link:'start-cloud-computing-with-aws' },
    { title: 'Do Not Use Create React App, Use Vite Instead', date: 'May 21, 2024',link:'do-not-use-cra' },
    { title: 'QA Documentation for Beginners', date: 'Jun 07, 2024',link:'qa-docs-for-beginners' },
    { title: 'Database Documentation with dbdocs and DBML', date: 'Aug 12, 2024', link: 'database-docs' },
    { title: 'Selenium and End-to-End Tests', date: 'Sep 30, 2024',link:'selenium-and-e2e-tests' },
    { title: 'Project Management using Trello vs. Asana vs. Jira vs. ClickUp', date: 'Jan 16, 2025',link:'project-management-tools' },
];

const Blogs = () => {
    return (
        <section className={styles.blogsSection}>
            <div className={styles.blogsContainer}>
                 <h2 className={styles.blogsTitle}>/ blogs</h2>
                <ul className={styles.blogList}>
                    {blogData.map((blog, index) => (
                         <li key={index} className={styles.blogItem}>
                             <a href={"/blogs/" + blog.link} className={styles.blogLink}>
                                 <div className={styles.blogCard}>
                                    <span className={styles.blogTitle}>{blog.title}</span>
                                    <span className={styles.blogDate}>{blog.date}</span>
                                 </div>
                             </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Blogs;