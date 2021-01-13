import React from 'react';
import styles from './Footer.module.css';

import fb from '../assets/logos/fb.svg';
import github from '../assets/logos/github.svg';
import dribbble from '../assets/logos/dribbble.svg';
import linkedin from '../assets/logos/linkedin.svg';

function Footer() {
    return(
        <div className={styles.footer}>
            <div className={styles.imageContainer}>
                <a href="https://github.com/ji-kun">
                    <img src={github} className={styles.logo} alt="github" />
                </a>
                <a href="https://dribbble.com/RohitKunji">
                <img src={dribbble} className={styles.logo} alt="dribbble" />
                </a>
                <a href="https://www.linkedin.com/in/rohitkunji/">
                <img src={linkedin} className={styles.logo} alt="linkedin" />
                </a>
                <a href="https://www.facebook.com/rohit.kunji">
                    <img src={fb} className={styles.logo} alt="fb" />
                </a>
            </div>
        </div>
    );
}

export default Footer;







