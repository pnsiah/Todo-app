import Card from "./Card";
import moon from "../assets/images/icon-moon.svg";
import "./header.css";

const Header = () => {
  return (
    <Card className='header'>
      <div className='heading'>Todo</div>
      <div className='time'>
        <img src={moon} alt='' />
      </div>
    </Card>
  );
};

export default Header;
