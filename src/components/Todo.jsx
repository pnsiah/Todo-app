import Card from "./Card";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
        { subject: "Trying", isCompleted: false  },
    ]);
const [enteredTodo, setEnteredTodo] = useState("");

//  const [filter, setFilter] = useState("all");

const changeStatus = (status, index) => {

  const newTodos = [...todos.slice(0, index), {...todos[index], isCompleted: !status}, ...todos.slice(index+1)];

  setTodos(newTodos);
}



const AddTodo = (item) => {
  const todo = {
  subject: item,
  isCompleted: false
};

setTodos((prev) => {
  return [todo, ...prev];
  });
};

return (
  <Card>
    <TodoInput enteredTodo={enteredTodo} setEnteredTodo={setEnteredTodo} onSave={AddTodo} />
    <TodoList todos={todos} changeStatus={changeStatus} />
    <TodoControls />
  </Card>
  );
};

export default Todo;
