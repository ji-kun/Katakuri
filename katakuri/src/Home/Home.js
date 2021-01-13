import React from 'react';
import styles from './Home.module.css';
import Me from '../assets/me.png';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Home() {
    return(
        <div className={styles.common}>
            <Header />
            <h1 className={styles.hello}>hello.</h1>
            <div className={styles.container}>
                <img className={styles.picture} src={Me} />
            </div>
            <div className={styles.blocks}>
                <div className={styles.block0}></div>
                <div className={styles.block1}></div>
                <div className={styles.block2}></div>
                <div className={styles.block3}></div>
                <div className={styles.block4}></div>
                <div className={styles.block5}></div>
            </div>
            <div className={styles.info}>
                <div className={styles.spacer}></div>
                <div><h1 className={styles.rohit}>ROHIT KUNJI</h1></div>
                <div className={styles.underline}></div>
                <div className={styles.textContain}><h3 className={styles.text}>
                    A hardworking individual and an aspiring UI/UX developer with unique analytical and problem solving skills, approaching every task with a happy positive attitude to do my best work, always . I am skilled in MERN Stack and Blockchain development, as well.
                </h3></div>
                <a href="../assets/cv-yellow.pdf" download>
                    <div className={styles.resume}>
                        Download Resume
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    );
}

export default Home;