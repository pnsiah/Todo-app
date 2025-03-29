import "./container.css";
import cross from "../assets/images/icon-cross.svg";
import { useRef } from "react";

const TodoItem = (props) => {
  const onClickHandler = () => {
    props.changeStatus(props.status, props.index);
  };

  const removeItemHandler = () => {
    props.removeItem(props.index);
  };

  const draggedItemIdx = useRef(null);
  const draggedOverItemIdx = useRef(null);

  const handleSort = () => {
    console.log("Start Index:", draggedItemIdx.current);
    console.log("Over Index:", draggedOverItemIdx.current);

    const copy = [...props.allTodos];
    const tmp = copy.splice(draggedItemIdx.current, 1)[0];
    copy.splice(draggedOverItemIdx.current, 0, tmp);
    props.updateTodos([...copy]);
    draggedItemIdx.current = null;
    draggedOverItemIdx.current = null;
  };
  return (
    <div
      draggable
      onDragStart={(e) => {
        draggedItemIdx.current = props.index;
        console.log("start", draggedItemIdx.current);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        draggedOverItemIdx.current = props.index;
        handleSort();
      }}
      className="container h-flex border"
    >
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
    </div>
  );
};

export default TodoItem;
