import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

import styles from "./CartSummary.module.css";

const CartSummary = ({ content, onClick, downloaded }) => { 

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
        onClick={onClick}
      />
      <div className={styles.illustration}>
          <h2>Illustration</h2>
          <img src={content.illus} alt="Download Content" />
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
        <button className={styles.downloadButton} onClick={downloadHandler}>Download</button>
      </div>
    </div>
  );
};

export default CartSummary;
