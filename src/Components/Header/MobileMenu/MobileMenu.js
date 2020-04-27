import React from 'react';
import styles from "./MobileMenu.module.css";

export default function MobileMenu(props) {

    let attachedStyles = [styles.SideDrawer, styles.Close];
    if (props.show) {
        attachedStyles = [styles.SideDrawer, styles.Open];
    }

    return (
        <React.Fragment>
        <div className={attachedStyles.join(" ")}>
            <nav className={styles.MobileMenu}>
                <li><a href="/">HOME</a></li>
                <li><a href="/">ABOUT</a></li>
                <li><a href="/">MY PROJECTS</a></li>
                <li><a href="/">CONTACT</a></li>
            </nav>
        </div>
        </React.Fragment>
    )
}
