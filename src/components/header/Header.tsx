import React, { useState } from "react";
import style from "./header.module.css";
// const Logo = require('./../assets/magnifying-glass-solid.svg') as string
import Search from "./../../assets/magnifying-glass-solid.svg";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <header>
      <div className={style.logo}>
        <a href="/">
          <img src="https://i.pinimg.com/originals/16/c4/02/16c402667ba8a1b771bc5f3f0de90f9e.png"></img>
        </a>
        <h1>Korotkoff</h1>
      </div>
      <div className={style.menu}>
        <ul className={style.menuItem}>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="addpost">Добавить пост</Link>
          </li>
        </ul>
      </div>
      <div className={style.Search}>
        <img
          onClick={() => setActive(!active)}
          className={style.SearchIcon}
          src={Search}
        ></img>
        <input
          type="text"
          className={active ? style.Input : style.none}
          placeholder="Search..."
        ></input>
      </div>
    </header>
  );
};
export default Header;
