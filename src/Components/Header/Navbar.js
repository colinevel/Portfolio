import React from 'react';
import styles from "./Navbar.module.css";
import NavigationItems from "./NavigationItems";
import MobileMenu from './MobileMenu/MobileMenu';

export default function Navbar(props) {

    return (
        <header className={styles.Header}>
            <NavigationItems />
            <div className={styles.HamburgerToggle} onClick={props.mobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}


