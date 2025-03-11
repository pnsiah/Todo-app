import Card from "./Card";
import "./container.css";
import cross from "../assets/images/icon-cross.svg";
import { useState } from "react";

const TodoItem = (props) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const onClickHandler = (event) => {
props.changeStatus(props.status, props.id)
  };
  return (
    <Card className='container h-flex border'>
     <div className='round'></div>
      <div
        onClick={onClickHandler}
        className={`todo_text item ${props.status ? "strike-through" : ""}`}>
        <p>{props.subject}</p>
      </div>
      <div className='icon_container'>
        <img className='icon' src={cross} alt='cancel-todo' />
      </div>
    </Card>
  );
};

export default TodoItem;
