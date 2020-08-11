import React from "react";

import styles from "./IconCart.module.css";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import { removeFromCart } from "../../../../redux/actions/index";

const IconCart = () => {
  const cartIcons = useSelector((state) => state.cart);
  const cartDisplay = useSelector(state => state.cartDisplay);
  const dispatch = useDispatch();
  return (
    <div className={cartDisplay ? `${styles.iconCartWrapper} ${styles.show}` : styles.iconCartWrapper}>
      <div className={styles.heading}>Collected Icons</div>
      <div className={styles.cartWrapper}>
        {cartIcons.length > 0 ? cartIcons.map((icon) => {
          return (
            <div className={styles.icon} key={icon.id}>
              <img src={icon.icon} alt="Icon" />
              <CloseIcon
                fontSize="small"
                style={{
                  position: "absolute",
                  bottom: "-.5rem",
                  right: "-.5rem",
                  width: "1rem",
                  height: "1rem",
                  borderRadius: "50%",
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 2px 2px 2px #eeeeee",
                  cursor: "pointer",
                  color: "#707070"
                }}
                onClick={() => dispatch(removeFromCart(icon.id))}
              />
            </div>
          );
        }) : <div style={{margin: "0 auto"}}>Empty</div>}
      </div>
      <button className={styles.downloadBtn} style={{display: cartIcons.length > 0 ? "block" : "none"}}>Download Collection</button>
    </div>
  );
};

export default IconCart;
