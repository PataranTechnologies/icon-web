import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";

import { addToCart } from "../../redux/actions/index";
import IconCart from "./components/IconCart/IconCart";
import DownloadThanks from "../../components/DownloadThanks/DownloadThanks";
import Backdrop from "../../components/Backdrop/Backdrop";

import styles from "./IconSearch.module.css";

const IconSearch = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const icons = useSelector(state => state.icons);

  const addIconToCart = (id) => {
    const icon = icons.find((icon) => id === icon.id);
    if(cart.includes(icon)) return;
    dispatch(addToCart(icon));
  }

  const downloadHandler = () => {
    setDownloadModal(true);
  }

  return (
    <div className={styles.searchWrapper}>
      <IconCart downloaded = {downloadHandler}/>
      <SearchBar placeholder="Search Icons" searchName="searchIcons"/>
      {downloadModal && <DownloadThanks onClick={() => setDownloadModal(false)}/>}
      {downloadModal && <Backdrop onClick={() => setDownloadModal(false)}/>}
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
