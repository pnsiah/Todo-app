import { useRef } from "react";
import cross from "../assets/images/icon-cross.svg";
import "./shared.css";

const TodoItem = (props) => {
  const onClickHandler = () => {
    props.toggleTodoStatus(props.id);
  };

  const removeItemHandler = () => {
    props.removeItem(props.id);
  };

  const draggedItemIdx = useRef(null);
  const draggedOverItemIdx = useRef(null);

  // Handle drag and drop
  const handleSort = () => {
    if (props.filter !== "All") return;

    const copy = [...props.todos];
    // Get dragged item
    const draggedItem = copy.splice(draggedItemIdx.current, 1)[0];
    // Switch position
    copy.splice(draggedOverItemIdx.current, 0, draggedItem);
    // Update todos
    props.updateTodos(copy);

    // Reset indices
    draggedItemIdx.current = null;
    draggedOverItemIdx.current = null;
  };
  return (
    <div
      draggable={props.filter === "All"}
      onDragStart={() => {
        draggedItemIdx.current = props.index;
        console.log("start", draggedItemIdx.current);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={() => {
        draggedOverItemIdx.current = props.index;
        console.log("drop", draggedOverItemIdx.current);
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
