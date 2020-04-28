import React, { useState, useEffect } from 'react';
import styles from "./Typer.module.css";

export default function Typer({speed = 100, children}) {

const [idx, setidx] = useState(0);
  
useEffect(() => {
    const timer = window.setInterval(() => setidx(v => v + 1), speed);
    return () => window.clearInterval(timer);
  })

  return (

    <div>
    <p className={styles.TyperText}>{children.substr(0,idx)}</p>
    </div>
  )

}
