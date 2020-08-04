import React from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import user from "../../assets/user.svg";
import collectedIcons from "../../assets/collected.svg";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigationWrapper}>
      <nav className={styles.navigation}>
        <div className={styles.logoWrapper}>
            <Link to="/"><img src={logo} alt="Me Icons" className={styles.logo}/></Link>
        </div>
        <ul className={styles.navigationLinksContainer}>
          <li className={styles.navigationLinkWrapper}><NavLink to="/icon-packs" className={styles.navigationLink} activeClassName={styles.activeOnPageNavigationLink}>Icon Packs</NavLink></li>
          <li className={styles.navigationLinkWrapper}><NavLink to="/illustrations" className={styles.navigationLink} activeClassName={styles.activeOnPageNavigationLink}>Illustrations</NavLink></li>
          <li className={styles.navigationLinkWrapper}><NavLink to="/custom-icons" className={styles.navigationLink} activeClassName={styles.activeOnPageNavigationLink}>Get Custom Icons</NavLink></li>
          <button className={styles.logInButton}><img src={user} alt="User" className={styles.logInUserImage}/> Login</button>
          <div className={styles.iconContainerCart}>
              <div className={styles.iconCount}>40</div>
              <img src={collectedIcons} alt="Icons Collected" className={styles.collectedIconsIllustration}/>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
