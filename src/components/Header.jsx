import Card from "./Card";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [darkmode, setDarkmode] = useState(false);

  const toggleMode = () => {
    setDarkmode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
      return newMode;
    });
  };
  return (
    <Card className="header">
      <div className="heading">Todo</div>
      <div onClick={toggleMode} className="time">
        <img src={darkmode ? moon : sun} alt="" />
      </div>
    </Card>
  );
};

export default Header;
