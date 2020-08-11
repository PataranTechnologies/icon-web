import React from 'react';
import ReactDOM from "react-dom";
import {ReactComponent as Tick} from "../../assets/tick.svg";

import styles from "./DownloadThanks.module.css";

const DownloadThanks = ({onClick}) => {
    return ReactDOM.createPortal(
        <div className={styles.thanksContainer}>
            <div>Thank you!</div>
            <div className={styles.tickContainer}>
            <Tick style={{width: "100%", height: "100%", verticalAlign: "middle", margin: "0 auto"}}/>
            </div>
            <div>You must credit the author to share your experience with your friends.</div>
            <button onClick={onClick}>Get More</button>
        </div>, document.getElementById("thanks-hook")
    );
};

export default DownloadThanks;
