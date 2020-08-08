import React from 'react';

import searchIcon from "../../assets/search.svg";
import styles from "./SearchBox.module.css";

const SearchBox = ({placeholder, name, searchIcons}) => {
    return (
        <div className={styles.searchBoxContainer} onClick={searchIcons}>
          <img src={searchIcon} alt="Search Icons" className={styles.searchIcon}/>
          <input
            type="search"
            placeholder={placeholder}
            name={name}
            className={styles.searchBoxInput}
          />
        </div>
    );
};

export default SearchBox;
