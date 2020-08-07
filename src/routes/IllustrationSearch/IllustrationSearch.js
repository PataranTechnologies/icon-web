import React, { useState } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";
import ItemsContainer from "../../components/ItemsContainer/ItemsContainer";

import icon1 from "../../assets/iconSetOne/wifi.svg";
import icon2 from "../../assets/iconSetOne/watch.svg";
import icon3 from "../../assets/iconSetOne/wallet.svg";
import icon4 from "../../assets/iconSetOne/user.svg";
import icon5 from "../../assets/iconSetOne/switch.svg";
import icon6 from "../../assets/iconSetOne/levels.svg";

import styles from "../IconSearch/IconSearch.module.css";

const IllustrationSearch = () => {
    const [icons] = useState([
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
      icon1,
      icon2,
      icon3,
      icon4,
      icon5,
      icon6,
    ]);
    return (
      <div className={styles.searchWrapper}>
        <SearchBar placeholder="Search Illustrations" searchName="searchIllustrations"/>
        <ItemsContainer items={icons} itemWidth={15} itemHeight={15}/>
      </div>
    );
  };
  
  export default IllustrationSearch;
