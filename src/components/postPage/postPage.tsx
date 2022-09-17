import React, { useRef } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { postSelector } from "./../../redux/slices/selector";
import styles from "./postPage.module.css";
import Coments from "./coments";
import { useAppDispatch } from "../../redux/store";
import { addComment } from "../../redux/slices/postSlice";

const PostPage: React.FC = () => {
  let { id } = useParams();
  const { items } = useSelector(postSelector);
  const itemsList = items.filter((item) => item.id === id);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  let idComment = String(Math.floor(Math.random() * 10000));

  return (
    <div className={styles.post}>
      <div>
        <h1>{itemsList[0].title}</h1>
      </div>
      <div>
        <h3>Опубликовано 04/2022 автором {itemsList[0].author}</h3>
      </div>
      <div>
        <p>{itemsList[0].text}</p>
      </div>
      <div>Метки</div>

      <div className={styles.comments}>
        Коментарии
        <div className={styles.inputCom}>
          <textarea
            ref={textAreaRef}
            placeholder="Оставте коментарий"
          ></textarea>
        </div>
        <div>
          <button
            onClick={() => {
              if (id && textAreaRef.current) {
                dispatch(
                  addComment({
                    id: id,
                    coments: { id: idComment, text: textAreaRef.current.value },
                  })
                );
                textAreaRef.current.value = "";
              }
            }}
            type="submit"
          >
            Отправить
          </button>
        </div>
        {itemsList[0].Coments.length > 0 ? (
          <Coments {...itemsList[0]}></Coments>
        ) : (
          <div>Коментариев нет</div>
        )}
      </div>
    </div>
  );
};

export default PostPage;
