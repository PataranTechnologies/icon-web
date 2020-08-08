import React from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as Tick} from "../../assets/tick.svg";

import styles from "./DownloadThanks.module.css";

const DownloadThanks = () => {
    return (
        <div className={styles.thanksContainer}>
            <div>Thank you!</div>
            <div className={styles.tickContainer}>
            <Tick style={{width: "100%", height: "100%", verticalAlign: "middle", margin: "0 auto"}}/>
            </div>
            <div>You must credit the author to share your experience with your friends.</div>
            <Link to="/">Get More</Link>
        </div>
    );
};

export default DownloadThanks;
