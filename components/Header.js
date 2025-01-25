import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';
import {RxHamburgerMenu} from 'react-icons/rx'
import {ImCross} from 'react-icons/im'
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
          };

        handleResize();
         window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, [])

     const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  const navItems = [
        { label: 'home', href: '#home' },
        { label: 'skills', href: '#skills' },
        { label: 'experience', href: '#experience' },
        { label: 'projects', href: '#projects' },
        { label: 'blogs', href: '#blogs' },
        { label: 'contact', href: '#contact' },
      ];
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
               <Image src="/sam-logo.png" alt="Sam Capuchino Logo" width={50} height={50}  />
               <h1 className={styles.logoText}>Sam Capuchino</h1>
            </div>

           {isMobile ?
           (
                 <button className={styles.hamburgerButton} onClick={toggleMenu}>
                     {isMenuOpen?
                         (<ImCross size={30} color="var(--light-gray)" />)
                            :
                         (<RxHamburgerMenu size={30} color="var(--light-gray)" />)
                        }
                 </button>
                )
            :
            (
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                      {navItems.map((item, index) =>(
                          <li key={index} className={styles.navItem}>
                              <a href={item.href} className={styles.navLink}>{item.label}</a>
                         </li>
                      ))}
                    </ul>
                </nav>
            )
           }

         {isMobile && isMenuOpen && (
            <nav className={styles.mobileNav}>
               <ul className={styles.mobileNavList}>
                  {navItems.map((item, index) => (
                        <li key={index} className={styles.mobileNavItem} >
                        <a href={item.href} className={styles.mobileNavLink} onClick={toggleMenu}>{item.label}</a>
                        </li>
                 ))}
                </ul>
            </nav>
        )}
        </header>
    );
};

export default Header;