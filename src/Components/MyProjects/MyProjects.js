import React from 'react';
import styles from "./MyProjects.module.css";
import sportyfind from "../../images/sportyfind.png"
import bookswap from "../../images/BookSwap.png";

export default function MyProjects() {
    return (
        <section id="myProjects" className={styles.Container}>
            <h2>My Projects</h2>
            <div className={styles.MyProjects}>
            <div className={styles.ImgContainer}>
                <img src={sportyfind} alt="sportyfind" />
                <div className={styles.ImgOverlay}></div>
                <div className={styles.ImgButton}><a href="https://sportyfind.herokuapp.com/" target="_blank" rel="noopener noreferrer">ENTER WEBSITE</a></div>
            </div>
            <div className={styles.ImgContainer}>
                <img src={bookswap} alt="bookswap" />
                <div className={styles.ImgOverlay}></div>
                <div className={styles.ImgButton}><a href="https://book-swap1234.herokuapp.com/" target="_blank" rel="noopener noreferrer">ENTER WEBSITE</a></div>
            </div>
            </div>
        </section>
    )
}
