import React, { useState } from "react";

import icon1 from "../../../../assets/iconSetOne/wifi.svg";
import icon2 from "../../../../assets/iconSetOne/watch.svg";
import icon3 from "../../../../assets/iconSetOne/wallet.svg";
import icon4 from "../../../../assets/iconSetOne/user.svg";
import icon5 from "../../../../assets/iconSetOne/switch.svg";
import icon6 from "../../../../assets/iconSetOne/levels.svg";

import icon7 from "../../../../assets/iconSetTwo/dish.svg";
import icon8 from "../../../../assets/iconSetTwo/man.svg";
import icon9 from "../../../../assets/iconSetTwo/logout.svg";
import icon10 from "../../../../assets/iconSetTwo/cup.svg";
import icon11 from "../../../../assets/iconSetTwo/plane.svg";
import icon12 from "../../../../assets/iconSetTwo/cart.svg";

import styles from "./IconShowcase.module.css";

const IconShowcase = () => {
    const [iconSetOne] = useState([icon1, icon2, icon3, icon4, icon5, icon6]);
    const [iconSetTwo] = useState([icon7, icon8, icon9, icon10, icon11, icon12]);
    return (
        <div className={styles.showcaseWrapper}>
            <div className={styles.row}>
                {iconSetOne.map((icon, index) => {
                    return (
                        <div className={styles.iconContainer} key={"ic1" + index}>
                            <img src={icon} alt="Icon"/>
                        </div>
                    );
                })}
            </div>
            <div className={styles.row}>
            {iconSetTwo.map((icon, index) => {
                    return (
                        <div className={styles.iconContainer} key={"ic2" + index}>
                            <img src={icon} alt="Icon"/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default IconShowcase;