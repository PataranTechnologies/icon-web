import React from 'react';

import cloud from "../../assets/uploadcloud.svg";
import styles from "./CustomIcons.module.css";

const CustomIcons = () => {
    return (
        <div className={styles.customIconsWrapper}>
            <div className={styles.dragDropArea}></div>
            <div className={styles.addImageInfoContainer}>
                <div className={styles.sectionOne}>
                <div className={styles.heading}>Upload high resolution image or screenshot</div>
                <div className={styles.subHeading}>JPG, PNG</div>
                </div>
                <div className={styles.sectionTwo}>
                    <img src={cloud} alt="Upload Content"/>
                    <div className={styles.dragHeading}>
                        <p>Drag and Drop an Image</p>
                        <p>or <button>browse</button> to choose a file</p>
                    </div>
                    <p className={styles.uploadInfo}>(1600 x 1200 or larger recommended, upto 10 MB each)</p>
                    <button className={styles.uploadSubmitBtn}>Next</button>
                </div>
            </div>
        </div>
    );
}; 

export default CustomIcons;
