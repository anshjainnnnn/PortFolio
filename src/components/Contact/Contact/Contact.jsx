import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gmail.png")} alt="Email icon" />
          <a href="mailto:anshjain454@gmail.com">anshjain454@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkdin.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ansh-jain-6095602ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/Ansh-Jain</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/git.png")} alt="Github icon" />
          <a href="https://github.com/anshjainnnnn">github.com/Ansh-jain</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/what.png")}
            alt="LinkedIn icon"
          />
          <a href="https://wa.me/8450970625?text=Hello,Ansh%20there!">Whatsapp</a>
        </li>
      </ul>
    </footer>
  );
};