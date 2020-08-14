import React, { useState } from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AddIcon from "@material-ui/icons/Add";
import SearchBar from "../../components/SearchBar/SearchBar";
import Overlay from "../../components/Overlay/Overlay";
import Backdrop from "../../components/Backdrop/Backdrop";
import DownloadSummary from "./components/DownloadSummary/DownloadSummary";

import illus1 from "../../assets/illustrations/airspace.svg";
import illus2 from "../../assets/illustrations/blog.svg";
import illus3 from "../../assets/illustrations/cab.svg";
import illus4 from "../../assets/illustrations/call.svg";
import illus5 from "../../assets/illustrations/card.svg";
import illus6 from "../../assets/illustrations/docs.svg";
import illus7 from "../../assets/illustrations/documents.svg";
import illus8 from "../../assets/illustrations/graduate.svg";
import illus9 from "../../assets/illustrations/house.svg";
import illus10 from "../../assets/illustrations/interview.svg";
import illus11 from "../../assets/illustrations/message.svg";
import illus12 from "../../assets/illustrations/pay.svg";

import styles from "./IllustrationSearch.module.css";

const IllustrationSearch = () => {
    const [illustrationToDownload, setIllustrationToDownload] = useState([]);
    const [overlayShown, setOverlayShown] = useState(false);
    const [illustrations] = useState([
      {illus: illus3, id: "1"},
      {illus: illus2, id: "2"},
      {illus: illus1, id: "3"},
      {illus: illus4, id: "4"},
      {illus: illus5, id: "5"},
      {illus: illus6, id: "6"},
      {illus: illus7, id: "7"},
      {illus: illus2, id: "8"},
      {illus: illus3, id: "9"},
      {illus: illus4, id: "10"},
      {illus: illus8, id: "11"},
      {illus: illus6, id: "12"},
      {illus: illus1, id: "13"},
      {illus: illus2, id: "14"},
      {illus: illus3, id: "15"},
      {illus: illus9, id: "16"},
      {illus: illus5, id: "17"},
      {illus: illus12, id: "18"},
      {illus: illus1, id: "19"},
      {illus: illus10, id: "20"},
      {illus: illus3, id: "21"},
      {illus: illus4, id: "22"},
      {illus: illus5, id: "23"},
      {illus: illus1, id: "24"},
      {illus: illus11, id: "25"},
      {illus: illus12, id: "26"},
      {illus: illus3, id: "27"},
      {illus: illus4, id: "28"},
      {illus: illus5, id: "29"},
      {illus: illus6, id: "30"},
      {illus: illus10, id: "31"},
      {illus: illus2, id: "32"},
      {illus: illus3, id: "33"},
      {illus: illus4, id: "34"},
      {illus: illus5, id: "35"},
      {illus: illus12, id: "36"},
      {illus: illus6, id: "37"},
      {illus: illus7, id: "38"},
      {illus: illus8, id: "39"},
      {illus: illus9, id: "40"},
      {illus: illus10, id: "41"},
      {illus: illus11, id: "42"},
      {illus: illus1, id: "43"},
      {illus: illus2, id: "44"},
      {illus: illus3, id: "45"},
      {illus: illus4, id: "46"},
      {illus: illus5, id: "47"},
      {illus: illus12, id: "48"},
    ]);

    const addIllustrationToCart = (id) => {
      const illustration = illustrations.find(illustration => id === illustration.id);
      setIllustrationToDownload(illustration);
      setOverlayShown(true);
    }

    return (
      <div className={styles.searchWrapper}>
        <Overlay show={overlayShown}>
          <DownloadSummary content={illustrationToDownload} onCancel={() => setOverlayShown(false)}/>
        </Overlay>
        {overlayShown && <Backdrop onClick={() => setOverlayShown(false)} />}
        <SearchBar placeholder="Search Illustrations" searchName="searchIllustrations"/>
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
