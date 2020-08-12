import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../../components/SearchBar/SearchBar";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";

import { addToCart, iconPreview } from "../../redux/actions/index";
import IconCart from "./components/IconCart/IconCart";
import CartSummary from "./components/CartSummary/CartSummary";
import DownloadThanks from "../../components/DownloadThanks/DownloadThanks";
import Backdrop from "../../components/Backdrop/Backdrop";
import Overlay from "../../components/Overlay/Overlay";
import IconPreview from "./components/IconPreview/IconPreview";


import styles from "./IconSearch.module.css";

const IconSearch = () => {
  const [downloadModal, setDownloadModal] = useState(false);
  const [summaryModal, setSummaryModal] = useState(false);
  const [overlayShown, setOverlayShown] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const icons = useSelector(state => state.icons);
  const iconsPreview = useSelector(state => state.iconPreview);

  const addIconToCart = (id) => {
    const icon = icons.find((icon) => id === icon.id);
    if(cart.includes(icon)) return;
    dispatch(addToCart(icon));
  }

  const summaryHandler = () => {
    setSummaryModal(true);
  }

  const downloadHandler = () => {
    setDownloadModal(true);
  }

  const iconPreviewer = (id) => {
    setOverlayShown(true);
    const icon = icons.find(icon => id === icon.id);
    dispatch(iconPreview(icon));
  }

  return (
    <div className={styles.searchWrapper}>
      <IconCart downloaded = {summaryHandler}/>
      <Overlay show={overlayShown}>
          <IconPreview content={iconsPreview} added={addIconToCart} onCancel={() => setOverlayShown(false)}/>
      </Overlay>
      {overlayShown && <Backdrop onClick={() => setOverlayShown(false)} />}
      <SearchBar placeholder="Search Icons" searchName="searchIcons"/>
      <Overlay show={summaryModal}>
        <CartSummary onClick={() => setSummaryModal(false)} content={cart} downloaded={downloadHandler}/>
      </Overlay>
      {summaryModal && <Backdrop onClick={() => setSummaryModal(false)} />}
      {downloadModal && <DownloadThanks onCancel={() => setDownloadModal(false)}/>}
      {downloadModal && <Backdrop onClick={() => setDownloadModal(false)}/>}
      <div className={styles.iconsWrapper}>
        <div className={styles.allIconsContainer}>
          {icons.map((icon, index) => {
            return (
              <div className={styles.iconContainer} key={"ic"+index}>
                <div className={styles.icon} onClick={iconPreviewer.bind(null, icon.id)}>
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
