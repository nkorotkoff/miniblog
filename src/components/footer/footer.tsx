import React from "react";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footer}>
        <ul>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Codepen</a>
          </li>
          <li>
            <a href="/">Email</a>
          </li>
          <li>
            <a href="/">Dribbble</a>
          </li>
          <li>
            <a href="/">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
