import React from 'react';
import styles from "./MyProjects.module.css";
import sportyfind from "../../images/sportyfind.png"
import bookswap from "../../images/BookSwap.png";

export default function MyProjects() {
    return (
        <section id="myprojects" className={styles.Container}>
            <div className={styles.App}>
            <h2>Sportyfind App</h2>
            <a href="https://sportyfind.herokuapp.com/" target="_blank"><img src={sportyfind} alt="sportyfind website" /></a>
            <p>A platform which enable users to create sport events in order to find other players. Players can then join the events based on the localisation and date.</p>
            </div>
            <div className={styles.App}>
            <h2>Book Swap App</h2>
            <a href="https://book-swap1234.herokuapp.com/" target="_blank"><img src={bookswap} alt="bookswap website" /></a>
            <p>A platform which encourage users to exchange used/read books against other used books in a points mechanism. Everytime a user "sells" a book, he gains points so that he can "purchase" another book.</p>
            </div>
        </section>
    )
}
