import React from 'react';
import styles from "./About.module.css";
import NodeJSLogo from "../../images/nodeJS.png";
import ReactJSLogo from "../../images/react-logo.png";
import MongoDBLogo from "../../images/mongodb.png";
import ExpressJSLogo from "../../images/Express3.png";
import { Link } from "react-scroll";

export default function About() {
    return (
        <section id="about" className={styles.Container}>
            <div className={styles.AboutMe}>
                <h2>About me</h2>
                <p>After working several years as a business analyst and consultant for software companies, and collaborating with developers, I decided to go on the other side and learn to code in order to build amazing and modern websites.</p>
                <h3>Feel free to contact me if you are in need of a website:</h3>
                <Link
                className={styles.ContactButton}
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration= {500}>CONTACT ME</Link>
            </div>
            <div className={styles.Technos}>
                <h2>Technologies I use</h2>
                <ul className={styles.TechnosLogos}>
                    <li><img src={NodeJSLogo} alt="nodeJSlogo" /></li>
                    <li><img src={ReactJSLogo} alt="reactJSlogo" /></li>
                    <li><img src={MongoDBLogo} alt="mongodblogo" /></li>
                    <li><img src={ExpressJSLogo} alt="expressJSlogo" /></li>
                </ul>
            </div>
        </section>
    )
}
