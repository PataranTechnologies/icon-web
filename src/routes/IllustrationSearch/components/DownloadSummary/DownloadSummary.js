import React from "react";
import CloseIcon from "@material-ui/icons/Close";


import illus1 from "../../../../assets/illustrations/airspace.svg";
import illus2 from "../../../../assets/illustrations/blog.svg";
import illus3 from "../../../../assets/illustrations/cab.svg";
import illus4 from "../../../../assets/illustrations/call.svg";
import illus5 from "../../../../assets/illustrations/card.svg";
import illus6 from "../../../../assets/illustrations/docs.svg";
import illus7 from "../../../../assets/illustrations/documents.svg";
import illus8 from "../../../../assets/illustrations/graduate.svg";
import illus9 from "../../../../assets/illustrations/house.svg";
import illus10 from "../../../../assets/illustrations/interview.svg";
import illus11 from "../../../../assets/illustrations/message.svg";
import illus12 from "../../../../assets/illustrations/pay.svg";

import styles from "./DownloadSummary.module.css";

const DownloadSummary = ({ content, onCancel }) => {

  const formatSelectHandler = arg => {
    console.log(arg);
  }

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
      <div className={styles.illustration}>
          <h2>Illustration</h2>
          <img src={content.illus} alt="Download Content" />
      </div>
      <div className={styles.downloadInfo}>
        <div className={styles.downloadOptions}>
          <button onClick={formatSelectHandler.bind(null, "png")}>PNG</button>
          <button onClick={formatSelectHandler.bind(null, "svg")}>SVG</button>
          <button onClick={formatSelectHandler.bind(null, "psd")}>PSD</button>
          <button onClick={formatSelectHandler.bind(null, "eps")}>EPS</button>
        </div>
        <button className={styles.allBtn} onClick={formatSelectHandler.bind(null, "all")}>All Formats</button>
        <button className={styles.downloadButton}>Download</button>
      </div>
    </div>
  );
};

export default DownloadSummary;
