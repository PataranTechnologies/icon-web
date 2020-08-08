import React from "react";
import { useHistory } from "react-router-dom";

import SearchBox from "../../../../components/SearchBox/SearchBox";
import iconsGroup from "../../../../assets/icongroup.png";
import styles from "./Header.module.css";

const Header = () => {
  const history = useHistory();

  const iconSearchHandler = () => {
    history.push("/icon-search");
  }
  
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
        <SearchBox placeholder="Search by Icons Name" name="iconSearch" searchIcons={iconSearchHandler}/>
      </div>
    </div>
  );
};

export default Header;
