import Card from "./Card";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { subject: "Trying", isCompleted: false },
  ]);
  const [enteredTodo, setEnteredTodo] = useState("");

  const [filter, setFilter] = useState("all");

  const changeStatus = (status, index) => {
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isCompleted: !status },
      ...todos.slice(index + 1),
    ];

    setTodos(newTodos);
  };

  const AddTodo = (item) => {
    const todo = {
      subject: item,
      isCompleted: false,
    };

    setTodos((prev) => {
      return [todo, ...prev];
    });
  };

  const getFilteredList = () => {
    if (filter === "all") {
      return todos;
    } else if (filter === "active") {
      return todos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.isCompleted === true);
    }
  };

  const activeTodos = todos.filter((todo) => todo.isCompleted === false);
  const count = activeTodos.length;

  const filteredList = getFilteredList();
  console.log(filteredList);

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos(newTodos);
    console.log("clicked");
  };

  return (
    <Card>
      <TodoInput
        enteredTodo={enteredTodo}
        setEnteredTodo={setEnteredTodo}
        onSave={AddTodo}
      />
      <TodoList
        count={count}
        todos={filteredList}
        changeStatus={changeStatus}
        clearCompleted={clearCompleted}
      />
      <TodoControls filter={filter} setFilter={setFilter} />
    </Card>
  );
};

export default Todo;
