import React from 'react';
import styles from "./Navbar.module.css";
import { Link } from "react-scroll";


export default function NavigationItems() {


    return (
        <React.Fragment>
            <Link
            className={styles.Item}
            activeClass={styles.Active}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
            duration= {500}>HOME</Link>
            <Link
            className={styles.Item}
            activeClass={styles.Active}
            to="about"
            spy={true}
            smooth={true}
            offset={-60}
            duration= {500}>ABOUT</Link>
            <Link
            className={styles.Item}
            activeClass={styles.Active}
            to="myProjects"
            spy={true}
            smooth={true}
            offset={-59}
            duration= {500}>MY PROJECTS</Link>
            <Link
            className={styles.Item}
            activeClass={styles.Active}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
            duration= {500}>CONTACT</Link>
        </React.Fragment>
    )
}
