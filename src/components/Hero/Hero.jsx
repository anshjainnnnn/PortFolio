import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assests/hero/1719756394828jrky0tmm.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ansh Jain</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 8-months of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="https://wa.me/8450970625?text=Hello,Ansh%20there!" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
