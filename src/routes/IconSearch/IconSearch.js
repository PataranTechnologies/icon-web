import React, { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";

import icon1 from "../../assets/iconSetOne/wifi.svg";
import icon2 from "../../assets/iconSetOne/watch.svg";
import icon3 from "../../assets/iconSetOne/wallet.svg";
import icon4 from "../../assets/iconSetOne/user.svg";
import icon5 from "../../assets/iconSetOne/switch.svg";
import icon6 from "../../assets/iconSetOne/levels.svg";

import styles from "./IconSearch.module.css";

const IconSearch = () => {

  const [iconsInCart, setIconsInCart] = useState([]);
  const [icons] = useState([
    {icon: icon3, id: "1"},
    {icon: icon2, id: "2"},
    {icon: icon1, id: "3"},
    {icon: icon4, id: "4"},
    {icon: icon5, id: "5"},
    {icon: icon6, id: "6"},
    {icon: icon1, id: "7"},
    {icon: icon2, id: "8"},
    {icon: icon3, id: "9"},
    {icon: icon4, id: "10"},
    {icon: icon5, id: "11"},
    {icon: icon6, id: "12"},
    {icon: icon1, id: "13"},
    {icon: icon2, id: "14"},
    {icon: icon3, id: "15"},
    {icon: icon4, id: "16"},
    {icon: icon5, id: "17"},
    {icon: icon6, id: "18"},
    {icon: icon1, id: "19"},
    {icon: icon2, id: "20"},
    {icon: icon3, id: "21"},
    {icon: icon4, id: "22"},
    {icon: icon5, id: "23"},
    {icon: icon6, id: "24"},
    {icon: icon1, id: "25"},
    {icon: icon2, id: "26"},
    {icon: icon3, id: "27"},
    {icon: icon4, id: "28"},
    {icon: icon5, id: "29"},
    {icon: icon6, id: "30"},
    {icon: icon1, id: "31"},
    {icon: icon2, id: "32"},
    {icon: icon3, id: "33"},
    {icon: icon4, id: "34"},
    {icon: icon5, id: "35"},
    {icon: icon6, id: "36"},
    {icon: icon1, id: "37"},
    {icon: icon2, id: "38"},
    {icon: icon3, id: "39"},
    {icon: icon4, id: "40"},
    {icon: icon5, id: "41"},
    {icon: icon6, id: "42"},
    {icon: icon1, id: "43"},
    {icon: icon2, id: "44"},
    {icon: icon3, id: "45"},
    {icon: icon4, id: "46"},
    {icon: icon5, id: "47"},
    {icon: icon6, id: "48"},
  ]);

  const addIconToCart = (id) => {
    const icon = icons.find((icon) => id === icon.id);
    setIconsInCart([...iconsInCart, icon]);
  }

  return (
    <div className={styles.searchWrapper}>
      <SearchBar placeholder="Search Icons" searchName="searchIcons"/>
      <div className={styles.iconsWrapper}>
        <div className={styles.allIconsContainer}>
          {icons.map((icon, index) => {
            return (
              <div className={styles.iconContainer} key={index}>
                <div className={styles.icon}>
                  <img src={icon.icon} alt="icon" />
                </div>
                <div className={styles.addToCollectionBtn}>
                  <button onClick={addIconToCart.bind(null, icon.id)}>
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
    </div>
  );
};

export default IconSearch;
