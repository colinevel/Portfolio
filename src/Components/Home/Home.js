import React from 'react';
import styles from "./Home.module.css"
import photoCV from "../../images/photoCVRounded.png"

export default function Home(props) {
    return (
        <React.Fragment>
        <div className={styles.HomeContainer}>
            <div className={styles.Infos}>
                <h1>Hi, my name is Coline. I'm a Fullstack Web Developer</h1>
                <img className={styles.ProfilePic} src={photoCV} alt="Coline Velard" />
            </div>
        </div>
        </React.Fragment>
    )
}
