import React from "react";
import styles from "./About.module.css";
const frfr = "../assests/about/icons8-front-end-64.png"
const abab= "../assests/about/6f2c871450df41b7b78b7258350da7e4.jpeg"
import { getImageUrl } from "../../utils";
const bubu = "../assests/about/serverIcon.png"
const cucu = "../assests/about/cursorIcon.png"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl(abab)}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(frfr)} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl(bubu)} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};