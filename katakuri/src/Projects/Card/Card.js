import React from 'react';
import styles from './Card.module.css';

import cardImage from '../../assets/cardImage.png';

function Card(props) {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={cardImage} />

            </div>
            <div className={styles.description}>
                <h6 className={styles.desc}>
                    {props.title}
                </h6>
                <h6 className={styles.dates}>
                    {props.date} 
                </h6>
                <h6 className={styles.task}>
                    <br />
                    {props.description}
                </h6>
            </div>
        </div>
    )
}

export default Card;