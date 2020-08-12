import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";
import SearchBar from "../../components/SearchBar/SearchBar";
import Overlay from "../../components/Overlay/Overlay";
import Backdrop from "../../components/Backdrop/Backdrop";
import DownloadSummary from "./components/DownloadSummary/DownloadSummary";
import DownloadThanks from "../../components/DownloadThanks/DownloadThanks";
import {addIllustrationToDownload} from "../../redux/actions/index";

import styles from "./IllustrationSearch.module.css";

const IllustrationSearch = () => {
    const dispatch = useDispatch();
    const [downloadModal, setDownloadModal] = useState(false);
    const illustrationToDownload = useSelector(state => state.illustrationDownload);
    const [overlayShown, setOverlayShown] = useState(false);
    const illustrations = useSelector(state => state.illustrations);

    const addIllustrationToCart = (id) => {
      const illustration = illustrations.find(illustration => id === illustration.id);
      dispatch(addIllustrationToDownload(illustration));
      setOverlayShown(true);
    }

    const downloadHandler = () => {
      setOverlayShown(false);
      setDownloadModal(true);
    }

    return (
      <div className={styles.searchWrapper}>
        <Overlay show={overlayShown}>
          <DownloadSummary content={illustrationToDownload[0]} downloaded={downloadHandler} onCancel={() => setOverlayShown(false)}/>
        </Overlay>
        {overlayShown && <Backdrop onClick={() => setOverlayShown(false)} />}
        <SearchBar placeholder="Search Illustrations" searchName="searchIllustrations"/>
        {downloadModal && <DownloadThanks onClick={() => setDownloadModal(false)}/>}
        {downloadModal && <Backdrop onClick={() => setDownloadModal(false)}/>}
        <div className={styles.illustrationsWrapper}>
        <div className={styles.allIllustrationsContainer}>
          {illustrations.map((illustration, index) => {
            return (
              <div className={styles.illustrationContainer} key={index}>
                <div className={styles.illustration}>
                  <img src={illustration.illus} alt="illustration" />
                </div>
                <div className={styles.addToCollectionBtn}>
                  <button onClick={addIllustrationToCart.bind(null, illustration.id)}>
                    <AddIcon style={{ verticalAlign: "middle" }} /> Download
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
  
  export default IllustrationSearch;
