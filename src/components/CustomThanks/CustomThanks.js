import React from 'react';
import { Link } from "react-router-dom";
import {ReactComponent as Tick} from "../../assets/tick.svg";

import styles from "../DownloadThanks/DownloadThanks.module.css";

const CustomThanks = () => {
    return (
        <div className={styles.thanksContainer}>
            <div>Thank you!</div>
            <div className={styles.tickContainer}>
            <Tick style={{width: "100%", height: "100%", verticalAlign: "middle", margin: "0 auto"}}/>
            </div>
            <div>You will get this icon within 24 hours at your Login E-mail address.</div>
            <Link to="/">Get More</Link>
        </div>
    );
};

export default CustomThanks;
