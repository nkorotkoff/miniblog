import React from "react";
import styles from "./coments.module.css";
import { postItem } from "../../redux/slices/postSlice";
const Coments: React.FC<postItem> = (ComentsProps) => {
  return (
    <>
      {ComentsProps.Coments.map((item: any) => {
        return (
          <div className={styles.comments}>
            <div className={styles.author}>Автор</div>
            <div className={styles.commentsText}>{item.text}</div>
          </div>
        );
      })}
    </>
  );
};

export default Coments;
