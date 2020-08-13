import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";

import styles from "./IconInfo.module.css";

const IconInfo = ({ content, onCancel, downloaded, editClicked }) => { 

  const [downloadOptions] = useState([{type: "png", selected: false}, {type: "svg", selected: false}, {type: "psd", selected: false}, {type: "eps", selected: false}]);

  const downloadHandler = () => {
    setTimeout(() => {
      downloaded();
    }, 300);
  };

  return (
    <div className={styles.summaryWrapper}>
        <CloseIcon
        fontSize="large"
        style={{
          position: "absolute",
          top: "0",
          right: "1rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          cursor: "pointer",
        }}
        onClick={onCancel}
      />
      <div className={styles.icon}>
          <h2>Icon</h2>
          <img src={content.icon} alt="Download Content" />
      </div>
      <div className={styles.downloadInfo}>
        <div className={styles.downloadOptions}>
          {downloadOptions.map((option, index) => {
            return (
              <button key={"op"+option.type}>{option.type.toUpperCase()}</button>
            );
          })}
        </div>
        <button className={styles.allBtn}>All Formats</button>
        <button className={styles.editBtn} onClick={editClicked}><EditIcon fontSize="small" style={{verticalAlign: "middle"}}/> Edit Icon</button> 
        <button className={styles.downloadButton} onClick={downloadHandler}>Download</button>
      </div>
    </div>
  );
};

export default IconInfo;
