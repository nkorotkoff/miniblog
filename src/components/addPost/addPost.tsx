import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../../redux/store";
import { setItems } from "../../redux/slices/postSlice";
import "./addpost.css";

interface IForminput {
  title: string;
  author: string;
  text: string;
  id: string;
  Coments: [];
  date: string;
}

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForminput>();
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();
  const date = new Date().toLocaleDateString("ru-RU");
  const onSubmit: SubmitHandler<IForminput> = (data, e) => {
    let id = String(Math.floor(Math.random() * 10000));
    data = { ...data, id, Coments: [], date: date };
    dispatch(setItems(data));
    e?.target.reset();
    setActive(true);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {!active && <span> </span>}
      {active && <div className="active">Ваш пост добавлен</div>}
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
      <input type={"submit"} />
    </form>
  );
};
export default AddPost;
