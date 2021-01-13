import React from 'react';
import styles from './Contact.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import instagram from '../assets/logos/instagram.svg';
import facebook from '../assets/logos/facebook.svg';
import twitter from '../assets/logos/twitter.svg';
import telegram from '../assets/logos/telegram.svg';

import map from '../assets/map.png';

function Contact() {
    return(
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.common}>
                <div className={styles.left}>
                    <div className={styles.myprojects}>
                        contact me.
                    </div>
                    <h2 className={styles.fun}>
                        Get in touch with me!<br />
                        It needn't be just for work :)
                    </h2>
                </div>
                <div className={styles.right}>
                    <div className={styles.email}>
                        <div><h1 className={styles.rohit}>EMAIL</h1></div>
                        <div className={styles.underline}></div>
                        <div className={styles.desc}>
                            rohit@kunji.me<br />
                            srinivasan.kunji@gmail.com
                        </div>
                    </div>
                    <div className={styles.social}>
                        <div><h1 className={styles.rohit}>SOCIAL</h1></div>
                        <div className={styles.underline}></div>
                        <div className={styles.imageContainer}>
                            <a href="https://github.com/ji-kun">
                                <img src={instagram} className={styles.logo} />
                            </a>
                            <a href="https://dribbble.com/RohitKunji">
                            <img src={facebook} className={styles.logo} />
                            </a>
                            <a href="https://www.linkedin.com/in/rohitkunji/">
                            <img src={twitter} className={styles.logo} />
                            </a>
                            <a href="https://www.facebook.com/rohit.kunji">
                                <img src={telegram} className={styles.logo} />
                            </a>
                        </div>
                    </div>
                    <div className={styles.address}>
                        <div><h1 className={styles.rohit}>ADDRESS</h1></div>
                        <div className={styles.underline}></div>
                        <a className={styles.mapContainer} href="https://www.google.com/maps/place/CGS+Colony+Wadala/@19.0821978,72.7411023,11z/data=!4m5!3m4!1s0x3be7cf51ed33881f:0xfa268f076cf5e19!8m2!3d19.0167877!4d72.8571378">
                            <img src={map} className={styles.map} />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default Contact;