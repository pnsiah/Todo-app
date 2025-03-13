import Card from "./Card";
import "./container.css";
import cross from "../assets/images/icon-cross.svg";

const TodoItem = (props) => {
  const onClickHandler = () => {
    props.changeStatus(props.status, props.id);
  };

  const removeItemHandler = () => {
    props.removeItem(props.id);
  };
  return (
    <Card className="container h-flex border">
      <div
        onClick={onClickHandler}
        className={`round ${props.status ? "check_mark" : ""}`}
      ></div>
      <div
        onClick={onClickHandler}
        className={`todo_text item ${props.status ? "strike-through" : ""}`}
      >
        <p>{props.subject}</p>
      </div>
      <div onClick={removeItemHandler} className="icon_container">
        <img className="icon" src={cross} alt="cancel-todo" />
      </div>
    </Card>
  );
};

export default TodoItem;
