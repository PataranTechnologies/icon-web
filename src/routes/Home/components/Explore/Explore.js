import React from 'react';
import { Link } from 'react-router-dom';

import woman from "../../../../assets/woman.png";
import createdIcons from "../../../../assets/created_icons.svg";
import customIcons from "../../../../assets/custom_icons.svg";
import onDemand from "../../../../assets/ondemand.svg";
import styles from "./Explore.module.css";

const Explore = () => {
    return (
        <div className={styles.exploreSectionWrapper}>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={woman} alt="Woman Explaining Terms of MeIcons"/>
                </div>
                <div className={styles.textContainer}>
                    <h2>Get High Quality Illustrations</h2>
                    <Link to="/">Explore More</Link>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={createdIcons} alt="Created Icons"/>
                </div>
                <div className={styles.textContainer}>
                    <h2>These icons are created for designers and developers</h2>
                    <Link to="/">Get in Touch</Link>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.imageContainer}>
                    <img src={customIcons} alt="Custom Icons"/>
                </div>
                <div className={styles.textContainer}>
                    <h2>Custom Icons on Demand</h2>
                    <Link to="/">Get it now</Link>
                    <img src={onDemand} alt="Custom Icons on demand"/>
                </div>
            </div>
        </div>
    );
};

export default Explore;
