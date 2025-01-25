import styles from '../styles/CleanHeader.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const CleanHeader = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

         return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
          };

    }, [router]);


    return (
        <header className={`${styles.cleanHeader} ${loading ? styles.loading : ''}`}>
           { loading &&  <div className={styles.loadingBar}></div>}
            <Link href="/" className={styles.headerLink}>
                <div className={styles.headerContent}>
                    <Image
                        src="/sam-logo-dark.png"
                        alt="Sam Capuchino Logo"
                        className={styles.logo}
                        width={48}
                        height={48}
                    />
                </div>
            </Link>
        </header>
    );
};

export default CleanHeader;