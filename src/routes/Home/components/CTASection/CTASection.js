import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import styles from "./CTASection.module.css";

const CTASection = () => {
  return (
    <div className={styles.CTASectionWrapper}>
      <div className={styles.CTAContainer}>
        <h2 className={styles.CTAText}>
          High quality line icons for professional Websites &amp; Apps
        </h2>
        <Link to="/" className={styles.CTABtn}>
          Get Icons <ChevronRightIcon fontSize="large" style={{verticalAlign: 'middle'}}/>
        </Link>
      </div>
    </div>
  );
};

export default CTASection;
