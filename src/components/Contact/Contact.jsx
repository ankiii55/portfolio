import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ankit.choudhary003@gmail.com">Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a target="_blank" href="https://www.linkedin.com/in/ankitchoudhary003/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("./contact/githubIcon.png")} alt="Github icon" />
          <a target="_blank" href="https://github.com/ankiii55">Github</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("./contact/resume.png")} alt="Github icon" />
          <a target="_blank" href="https://drive.google.com/file/d/1f0rBw7UV0RlXrWwlSm8a7yTEnK_D5N9Q/view?usp=drive_link">Resume</a>
        </li>
      </ul>
    </footer>
  );
};
