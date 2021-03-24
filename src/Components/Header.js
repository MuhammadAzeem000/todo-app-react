import React from "react";
import { useGlobalContext } from "../GlobalContext/Context";

const Header = () => {
  const { themeToggle } = useGlobalContext();
  return (
    <div className="app__header">
      <h1 className="app__header__heading">TODO</h1>
      <div className="app__header__icon" onClick={themeToggle}></div>
    </div>
  );
};

export default Header;
