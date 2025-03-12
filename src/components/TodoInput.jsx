import Card from "./Card";
import "./container.css";
import { useState } from "react";

const TodoInput = (props) => {
  const onChangeHandler = (event) => {
    props.setEnteredTodo(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSave(props.enteredTodo);
    props.setEnteredTodo("");
  };

  return (
    <Card className="container h-flex input-margins">
      <div className="round"></div>
      <form onSubmit={onSubmitHandler} action="" className="form_control">
        <input
          onChange={onChangeHandler}
          value={props.enteredTodo}
          className="todo_text"
          type="text"
          placeholder="Add todo"
        />
      </form>
    </Card>
  );
};

export default TodoInput;
