import React from "react";
import styles from "./post.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postSelector } from "./../../redux/slices/selector";
import { useAppDispatch } from "../../redux/store";
import { deleteItem } from "../../redux/slices/postSlice";
const Post: React.FC = () => {
  const { items } = useSelector(postSelector);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.wrapper}>
      {items.map((item, i) => {
        return (
          <div key={i} className={styles.mrg}>
            <div className={styles.post}>
              <Link className={styles.link} to={`/${item.id}`}>
                <h1>{item.title}</h1>
              </Link>
              <div>
                <h3>
                  Опубликовано {item.date} автором {item.author}
                </h3>
              </div>
              <div className={styles.text}>
                <p>{item.text.substring(0, 480)}...</p>
              </div>
              <div>Метки</div>
              <div className={styles.changing}>
                <Link className={styles.link} to={`./change/${item.id}`}>
                  Имзенить
                </Link>
                <div onClick={() => dispatch(deleteItem(item.id))}>Удалить</div>
              </div>
            </div>
          </div>
        );
      })}
      {items.length === 0 && <div className={styles.post}>Постов нет</div>}
    </div>
  );
};

export default Post;
