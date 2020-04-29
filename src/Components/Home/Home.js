import React from 'react';
import styles from "./Home.module.css"
import photoCV from "../../images/emoji.png";
import Typer from "../Typer/Typer";

export default function Home(props) {
    return (
        <React.Fragment>
        <section id="home" className={styles.HomeContainer}>
            <div className={styles.Infos}>
                <Typer>Hi, my name is Coline. I'm a Fullstack JS Web Developer.</Typer>
                <img className={styles.ProfilePic} src={photoCV} alt="Coline Velard" />
            </div>
        </section>
        </React.Fragment>
    )
}
