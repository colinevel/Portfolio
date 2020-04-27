import React from 'react';
import styles from "./Navbar.module.css";


export default function NavigationItems() {
    return (
        <ul className={[styles.NavItems, styles.DesktopOnly].join(" ")}>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">MY PROJECTS</a></li>
            <li><a href="/">CONTACT</a></li>
        </ul>
    )
}
