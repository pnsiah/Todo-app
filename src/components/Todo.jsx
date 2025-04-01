import Card from "./Card";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import DragAndDropHint from "./DragAndDropHint";
import { useState, useRef } from "react";

const Todo = () => {
  // Initialize todos
  const [todos, setTodos] = useState(() => [
    { subject: "Complete Todo App on Frontend Mentor", isCompleted: false },
    { subject: "Pick up groceries", isCompleted: true },
  ]);

  // Get new todos
  const [todoInput, setTodoInput] = useState("");

  // Set Filter
  const [filter, setFilter] = useState("All");

  // Toggle status
  const changeStatus = (status, index) => {
    const newTodos = [
      ...todos.slice(0, index),
      { ...todos[index], isCompleted: !status },
      ...todos.slice(index + 1),
    ];

    setTodos(newTodos);
  };

  const HandleAddTodo = (item) => {
    const todo = {
      id: crypto.randomUUID(),
      subject: item,
      isCompleted: false,
    };
    setTodos((prev) => {
      return [todo, ...prev];
    });
  };

  const getFilteredList = () => {
    console.log(todos);
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

  const updateTodos = (updatedList) => {
    console.log("Updating todos:", updatedList);
    setTodos(updatedList);
  };

  return (
    <Card>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        HandleAddTodo={HandleAddTodo}
      />
      <TodoList
        count={count}
        todos={filteredList}
        changeStatus={changeStatus}
        clearCompleted={clearCompleted}
        removeItem={removeItem}
        allTodos={todos}
        updateTodos={updateTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoControls filter={filter} setFilter={setFilter} />
      <DragAndDropHint />
    </Card>
  );
};

export default Todo;
