import React from "react";

import iconsGroup from "../../../../assets/icongroup.png";
import searchIcon from "../../../../assets/search.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.heroTextContainer}>
          <h1 className={styles.heroText}>
            Vectors &amp; Icons
            <br />
            grouped in packs
          </h1>
          <div className={styles.terminationBar}></div>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src={iconsGroup}
            alt="Icons Group"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.searchBoxContainer}>
          <img src={searchIcon} alt="Search" className={styles.searchIcon}/>
          <input
            type="search"
            placeholder="Search by Icons Name"
            name="icon-search"
            className={styles.searchBoxInput}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
