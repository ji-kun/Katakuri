import React from 'react';
import styles from './Projects.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Card from './Card/Card.js';

function Projects() {
    return(
        <div className={styles.common}>
            <Header />
            <div className={styles.container}>
                <div className={styles.myprojects}>
                    my projects.
                </div>
                <div className={styles.divisions}>
                    <div className={styles.cards}> 
                        <Card 
                            title="Mail.Kunji.Me"
                            date="Apr 2020 | Web Architecture Mini-Project"
                            description="Developed a mail server using an Instance on AWS and a Digital Ocean Droplet with Spam filters using RspamD, Dovecot as my Mail Delivery Agent and Postfix as the Mail Transfer Agent."
                        />
                    </div>
                    <div className={styles.cards}> 
                        <Card 
                            title="Infotsav '19"
                            date="Nov 2018 - Feb 2019 | ABV IIITM Gwalior"
                            description="Developed the website for Infotsav 19, The annual Techno Managerial Fest of ABV IIITM Gwalior.
                            Managed 3000+ registrations for different events.
                            Payment Gateway (PayTM) was implemented."
                        />
                    </div>
                    <div className={styles.cards}> 
                        <Card 
                            title="HealthHub"
                            date="Mar 2019 | Hack NSUT, NSUT Delhi"
                            description="Developed HealthHub, a web service that allows it’s users to save their MedicalRecords electronically.
                            This project aims to provide a decentralised and secure storage for medical records. Worked with
                            IPFS for decentralised storage and OpenPGP to provide end to end encryption for Medical Records."
                        />
                    </div>
                    <div className={styles.cards}> 
                        <Card 
                            title="Snapshot"
                            date="Sept 2020 | B.Tech. Project "
                            description="Developed a Decentralized Social media platform using Blockchain. Ensured complete data security and user confidentiality alongside an easy means of crowdfunding. "
                        />
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Projects;