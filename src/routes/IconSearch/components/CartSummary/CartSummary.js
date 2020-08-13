import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { emptyCart } from "../../../../redux/actions";

import styles from "./CartSummary.module.css";

const CartSummary = ({ content, onClick, downloaded }) => {
  const [downloadOptions] = useState([
    { type: "png", selected: false },
    { type: "svg", selected: false },
    { type: "psd", selected: false },
    { type: "eps", selected: false },
  ]);

  const dispatch = useDispatch();

  const downloadHandler = () => {
    setTimeout(() => {
      dispatch(emptyCart());
      onClick();
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
      <div className={styles.icons}>
        <h2>Collected Icons</h2>
        <div className={styles.iconContainer}>
          {content.map((icon, index) => {
            return (
              <img src={icon.icon} alt="Download Content" key={"icp" + index} />
            );
          })}
        </div>
      </div>
      <div className={styles.downloadInfo}>
        <div className={styles.downloadOptions}>
          {downloadOptions.map((option) => {
            return (
              <button key={"op" + option.type}>
                {option.type.toUpperCase()}
              </button>
            );
          })}
        </div>
        <button className={styles.allBtn}>All Formats</button>
        <button className={styles.downloadButton} onClick={downloadHandler}>
          Download
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
