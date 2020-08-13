import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

import cloud from "../../assets/uploadcloud.svg";
import uploaded from "../../assets/uploaded.png";
import styles from "./CustomIcons.module.css";

const CustomIcons = () => {
  const [imageUpload, setImageUpload] = useState(false);

  return (
    <div className={styles.customIconsWrapper}>
      <div className={styles.dragDropArea}></div>
      <div className={styles.addImageInfoContainer}>
        <div className={styles.sectionOne}>
          <div className={styles.heading}>
            Upload high resolution image or screenshot
          </div>
          <div className={styles.subHeading}>JPG, PNG</div>
        </div>
        <div className={styles.sectionTwo}>
          {!imageUpload ? (
            <>
              <img
                src={cloud}
                alt="Upload Content"
                onClick={() => setImageUpload(true)}
              />
              <div className={styles.dragHeading}>
                <p>Drag and Drop an Image</p>
                <p>
                  or <button>browse</button> to choose a file
                </p>
              </div>
              <p className={styles.uploadInfo}>
                (1600 x 1200 or larger recommended, upto 10 MB each)
              </p>
            </>
          ) : (
            <>
              <img src={uploaded} alt="Uploaded Content" />
              <button
                onClick={() => setImageUpload(false)}
                className={styles.deleteBtn}
              >
                <DeleteIcon
                  fontSize="medium"
                  style={{ verticalAlign: "middle" }}
                />{" "}
                Delete
              </button>
            </>
          )}
          <button
            className={styles.uploadSubmitBtn}
            style={{
              background: imageUpload && "#E1B313",
              color: imageUpload && "#000000",
              fontWeight: imageUpload && "700",
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomIcons;
