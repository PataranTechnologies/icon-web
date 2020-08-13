import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";

import { addToCart } from "../../../../redux/actions";


import styles from "./IconPreview.module.css";

const IconPreview = ({ content, onCancel, downloaded }) => {
    const [currentColor, setCurrentColor] = useState("");
    const [size, setSize] = useState("");
    const [show, setShow] = useState({size: false, color: true});
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();

  const colorChangeHandler = (event) => {
    setCurrentColor(event.target.value);
  }

  const sizeChangeHandler = event => {
      setSize(event.target.value);
  }

  const sectionSwitchHandler = (arg) => {
    if(arg==="size"){
        if(show.size){
            return;
        }
        setShow({color: false, size: !show.size});
    }
    else if(arg==="color"){
        if(show.color){
            return;
        }
        setShow({size: false, color: !show.color});
    }
    return;
  }

    const addIconToCart = (icon) => {
    if(cart.includes(icon)) return;
    dispatch(addToCart(icon));
  }

  return (
    <div className={styles.previewWrapper}>
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
      <div className={styles.iconContainer}>
        <div>
          <h2>Edit Icons</h2>
          <div className={styles.icon}>
            <img src={content.icon} alt="Preview Icon" />
          </div>
        </div>
        <button className={styles.addToCollectionBtn} onClick={addIconToCart.bind(null, content)}>
          <AddIcon style={{ verticalAlign: "middle" }} /> Collection
        </button>
      </div>
      <div className={styles.stylingSection}>
        <div className={styles.headers}>
          <button onClick={sectionSwitchHandler.bind(null, "color")} className={show.color ? `${styles.headerBtn} ${styles.show}` : styles.headerBtn}>Select Color</button>
          <button onClick={sectionSwitchHandler.bind(null, "size")} className={show.size ? `${styles.headerBtn} ${styles.show}` : styles.headerBtn}>Resize</button>
        </div>
        <div className={show.color ? `${styles.colorPicker} ${styles.show}` : styles.colorPicker}>
            <input type="color" onChange={colorChangeHandler} value={currentColor}/>
            <div className={styles.colorValue}>{currentColor}</div>
        </div>
        <div className={show.size ? `${styles.resize} ${styles.show}` : styles.resize}>
            <div>
            <h3>Asset Size</h3>
            <input type="range" value={size} min="0" max="10" onChange={sizeChangeHandler}/><p>8 dp</p>
            </div>
            <div>
            <h3>Asset Padding</h3>
            <input type="range" value={size} min="0" max="10" onChange={sizeChangeHandler}/><p>8 dp</p>
            </div>

        </div>
        <button className={styles.downloadButton} onClick={downloaded}>Download</button>
      </div>
    </div>
  );
};

export default IconPreview;
