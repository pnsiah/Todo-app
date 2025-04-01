import Card from "./Card";
import "./container.css";
import { useState } from "react";

const TodoInput = (props) => {
  const onChangeHandler = (event) => {
    props.setTodoInput(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (props.todoInput.length < 1) return;
    props.HandleAddTodo(props.todoInput);
    props.setTodoInput("");
    // show all todos otherwise the you can't see if the todo item was added
    if (props.filter === "Completed") {
      props.setFilter("All");
    }
  };

  return (
    <Card className="container h-flex input-margins">
      <div className="round"></div>
      <form onSubmit={onSubmitHandler} action="" className="form_control">
        <input
          onChange={onChangeHandler}
          value={props.todoInput}
          className="todo_text"
          type="text"
          placeholder="Add todo"
        />
      </form>
    </Card>
  );
};

export default TodoInput;
