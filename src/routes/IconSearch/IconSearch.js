import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";

import { addToCart } from "../../redux/actions/index";
import IconCart from "./components/IconCart/IconCart";

import styles from "./IconSearch.module.css";

const IconSearch = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const icons = useSelector(state => state.icons);

  const addIconToCart = (id) => {
    const icon = icons.find((icon) => id === icon.id);
    if(cart.includes(icon)) return;
    dispatch(addToCart(icon));
  }

  return (
    <div className={styles.searchWrapper}>
      <IconCart/>
      <SearchBar placeholder="Search Icons" searchName="searchIcons"/>
      <div className={styles.iconsWrapper}>
        <div className={styles.allIconsContainer}>
          {icons.map((icon, index) => {
            return (
              <div className={styles.iconContainer} key={"ic"+index}>
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
