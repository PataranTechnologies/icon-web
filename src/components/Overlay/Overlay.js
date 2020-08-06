import React from 'react';
import ReactDOM from 'react-dom';

import styles from './Overlay.module.css';

const Overlay = (props) => {
    const overlayContent = (
        props.show ? <div className={styles.overlay}>{props.children}</div>: null
    );
    return (
        ReactDOM.createPortal(overlayContent, document.getElementById("overlay-hook"))
    );
}

export default Overlay;