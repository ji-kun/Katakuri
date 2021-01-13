import React from 'react';
import styles from './Header.module.css';

function Header() {
    return(
        <div className={styles.header}>
            <div className={styles.container}>
                <a href = "#"  className={styles.home}>
                    <h3 className={styles.links}>Home</h3>
                </a>
                <a href = "sec2"  className={styles.about}>
                    <h3 className={styles.links}>About</h3>
                </a>
                <a href = "sec3"  className={styles.projects}>
                    <h3 className={styles.links}>Projects</h3>
                </a>
                <a href = "sec4"  className={styles.contact}>
                    <h3 className={styles.links}>Contact me</h3>
                </a>
            </div>
            <div className={styles.hamburger}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                </div>
        </div>
    );
}

export default Header;