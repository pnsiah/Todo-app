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

  const [filter, setFilter] = useState("All");

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
      // id: Math.random().toString(),
    };

    setTodos((prev) => {
      return [todo, ...prev];
    });
  };

  const getFilteredList = () => {
    if (filter === "All") {
      return todos;
    } else if (filter === "Active") {
      return todos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "Completed") {
      return todos.filter((todo) => todo.isCompleted === true);
    }
  };

  const activeTodos = todos.filter((todo) => todo.isCompleted === false);
  const count = activeTodos.length;

  const filteredList = getFilteredList();

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.isCompleted === false);
    setTodos(newTodos);
  };

  const removeItem = (id) => {
    const newTodos = todos.filter((todo, index) => index != id);
    setTodos(newTodos);
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
        removeItem={removeItem}
      />
      <TodoControls filter={filter} setFilter={setFilter} />
    </Card>
  );
};

export default Todo;
