// import React, { useState } from "react";

// import socialIcons from "../../../../assets/ic_social_icons.png";
// import multimediaIcons from "../../../../assets/ic_multimedia_icons.svg";
// import essentialIcons from "../../../../assets/ic_essential_icons.svg";
// import miscIcons from "../../../../assets/ic_social_icons.png";
// import styles from "./IconPacks.module.css";

// const IconPacks = () => {
//   const [packs] = useState([
//     {
//       title: "Social Icons",
//       subtitle: "30 Social Line Icons",
//       image: socialIcons,
//     },
//     {
//       title: "Multimedia Icons",
//       subtitle: "50 Multimedia Icons",
//       image: multimediaIcons,
//     },
//     {
//       title: "Essential Icons",
//       subtitle: "380 Essential Icons",
//       image: essentialIcons,
//     },
//     {
//       title: "Miscellaneous Icons",
//       subtitle: "100 Miscellaneous Icons",
//       image: miscIcons,
//     },
//     {
//         title: "Health Care",
//         subtitle: "100 Health Care Icons",
//         image: socialIcons,
//       },
//     {
//       title: "Essential Colors",
//       subtitle: "380 Essential Colored Icons",
//       image: socialIcons,
//     },
//     {
//       title: "Gastronomy Icons",
//       subtitle: "230 Gastronomy Colored Icons",
//       image: socialIcons,
//     },
//     {
//       title: "Basic Icons",
//       subtitle: "230 Basic Line Icons",
//       image: socialIcons,
//     },
//   ]);
//   return (
//     <div className={styles.iconPacksWrapper}>
//       <h1>POPULAR ICON PACKS</h1>
//       <div className={styles.iconPacksContainer}>
//                 {packs.map((pack, index) => {
//                     return (
//                         <div className={styles.iconPack}>
//                             <div className={styles.iconPackInfo}>
//                             <h2>{pack.title}</h2>
//                             <p>{pack.subtitle}</p>
//                             </div>
//                             <div>
//                                 <img src={pack.image} alt={pack.title}/> 
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//     </div>
//   );
// };

// export default IconPacks;


import React from 'react';

import styles from "./IconPacks.module.css";

const IconPacks = () => {
    return (
        <div className={styles.iconPacks}>
            Icon Packs Issue!
        </div>
    );
};

export default IconPacks;
