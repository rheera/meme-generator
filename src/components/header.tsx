import React from "react";
import "@/scss/header.scss";

const Header = () => (
  <header className="header">
    <img
      src="src/assets/images/Troll Face.png"
      alt="Troll Face Page Icon"
      className="header__icon"
    />
    <h2 className="header__title">Meme Generator</h2>
    <h3 className="header__subtitle">React Course - Project 3</h3>
  </header>
);

export default Header;
