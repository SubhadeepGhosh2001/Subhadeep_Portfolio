import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Subhadeep</h1>
        <p className={styles.description}>
        MCA student with 2 years at TCS, skilled in Java, Python, JavaScript, and full-stack development. Exploring Generative AI and building scalable, creative tech solutions.


</p>
        <a href="mailto:subhadeepghosh1270@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Subhadeep_dp_.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};