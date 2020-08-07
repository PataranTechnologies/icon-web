import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";

import styles from "./ItemsContainer.module.css";

const ItemsContainer = ({ items, itemWidth, itemHeight}) => {
  return (
    <>
      <div className={styles.itemsWrapper}>
        <div className={styles.allItemsContainer}>
          {items.map((item, index) => {
            return (
              <div className={styles.itemContainer} key={index} style={{width: `${itemWidth}rem`, height: `${itemHeight}rem`}}>
                <div className={styles.item} style={{height: `${itemHeight * 80/100}rem`}}>
                  <img src={item} alt="item" />
                </div>
                <div className={styles.addToCollectionBtn} style={{height: `${itemHeight * 20/100}rem`}}>
                  <button>
                    <AddIcon style={{ verticalAlign: "middle" }} /> Collection
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.nextPageBtn}>
        Next{" "}
        <ChevronRightIcon
          fontSize="large"
          style={{ verticalAlign: "middle" }}
        />
      </button>
    </>
  );
};

export default ItemsContainer;
