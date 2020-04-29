import React from 'react';
import styles from "./MobileMenu.module.css";
import NavigationItems from "../NavigationItems";

export default function MobileMenu(props) {

    let attachedStyles = [styles.SideDrawer, styles.Close];
    if (props.show) {
        attachedStyles = [styles.SideDrawer, styles.Open];
    }

    return (
        <React.Fragment>
        <div className={attachedStyles.join(" ")}>
            <div className={styles.NavItems}>
            <NavigationItems />
            </div>
        </div>
        </React.Fragment>
    )
}
