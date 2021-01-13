import React from 'react';
import styles from './About.module.css';
import pic from '../assets/Group3.png';
import rect from '../assets/rect.png';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function About() {
    return(
        <div className={styles.common}>
            <Header />
            <div className={styles.rect}>
                <img src={rect} className={styles.rectangle} alt="dots" />
            </div>
            <div className={styles.aboutContainer}>
                <div className={styles.imageContainer} >
                    <img src={pic} className={styles.image} alt="me" />
                </div>
                
                <div className={styles.textContainer} >
                    <div className={styles.spacer}></div>
                    <h1 className={styles.hello}>about me.</h1>
                    <div><h1 className={styles.rohit}>ROHIT KUNJI</h1></div>
                    <div className={styles.underline}></div>
                    <div className={styles.custom}><div className={styles.imageContainerMobile} >
                        <img src={pic} className={styles.imageMobile} alt="me" />
                    </div>
                    <div className={styles.custom2}>
                        <h3 className={styles.roles}>
                            DEVELOPER | DESIGNER | BLOCKCHAIN ENTHUSIAST
                        </h3>
                        <h4 className={styles.college}>
                            Persuing an Integrated Post Graduation Course at  
                            <a href="https://www.iiitm.ac.in/index.php/en/" className={styles.hyper}>
                            ABV IIITM Gwalior. </a>
                        </h4>
                        </div>
                    </div>
                    <div className={styles.experience}>
                        <div className={styles.thumbstack}>
                            <h2 className={styles.desc}>UI UX DEVELOPER INTERN</h2>
                            <h2 className={styles.dates}>Jun 2020- Aug 2020</h2>
                            <h2 className={styles.task}>
                            Designed and developed UI for multiple applications under the Thumbstack Umbrella. Developed UX flows and conducted UX Research for all the projects
                            <a href="http://thumbstack.in/" className={styles.hyper}>
                            @THUMBSTACK TECHNOLOGIES.</a> 
                            </h2>
                        </div>
                        <div className={styles.tantra}>
                            <h2 className={styles.desc}>WEB DEVELOPER INTERN</h2>
                            <h2 className={styles.dates}>Jun 2019- Jul 2020</h2>
                            <h2 className={styles.task}>
                            Designed and developed UI for multiple applications under the Thumbstack Umbrella. Developed UX flows and conducted UX Research for all the projects
                            <a href="https://tantratshirts.com/" className={styles.hyper}>
                            @TANTRA UNIVERSE.</a> 
                            </h2>
                        </div>
                    </div>
                </div>
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

export default About;