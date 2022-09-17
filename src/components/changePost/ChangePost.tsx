import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { changePost, postItem } from "../../redux/slices/postSlice";
import { postSelector } from "./../../redux/slices/selector";
import "./addpost.css";
import { useParams } from "react-router";
import { coments } from "./../../redux/slices/postSlice";

interface IForminput {
  title: string;
  author: string;
  text: string;
  id: string;
  Coments: coments[];
  date: string;
}

const ChangePost = () => {
  const { id } = useParams();
  const { items } = useSelector(postSelector);
  const item = items.find((item) => {
    if (item.id === id) {
      return item;
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminput>({
    defaultValues: React.useMemo(() => {
      if (item) {
        return item;
      }
    }, items),
  });
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IForminput> = (data, e) => {
    dispatch(changePost(data));
    e?.target.reset();
    setActive(true);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {!active && <span> </span>}
      {active && <div className="active">Ваш пост Изменен</div>}
      <input
        placeholder="Тема"
        type="text"
        {...register("title", { required: true })}
      />
      {errors.title && <span>Это поле обязательно</span>}
      <input
        type="text"
        placeholder="Автор"
        {...register("author", { required: true })}
      ></input>
      {errors.author && <span>Это поле обязательно</span>}
      <textarea
        placeholder="Текст"
        className="text"
        {...register("text", { required: true })}
      ></textarea>
      {errors.text && <span>Это поле обязательно</span>}
      <button type={"submit"}>Изменить пост</button>
    </form>
  );
};
export default ChangePost;
