import Card from "./Card";
import "./container.css";
import cross from "../assets/images/icon-cross.svg";

const TodoItem = () => {
  return (
    <Card className='container h-flex border'>
      <div className='round'></div>
      <div className='todo_text item'>
        <p>First Todo lol</p>
      </div>
      <div className='icon_container'>
        <img className='icon' src={cross} alt='cancel-todo' />
      </div>
    </Card>
  );
};

export default TodoItem;
