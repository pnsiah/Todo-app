import Card from "./Card";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import DragAndDropHint from "./DragAndDropHint";
import { useState, useRef } from "react";

const Todo = () => {
  // Initialize todos
  const [todos, setTodos] = useState(() => [
    {
      id: "1",
      subject: "Complete Todo App on Frontend Mentor",
      isCompleted: false,
    },
    { id: "2", subject: "Pick up groceries", isCompleted: true },
  ]);

  // Get new todos
  const [todoInput, setTodoInput] = useState("");

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

  // Set Filter
  const [filter, setFilter] = useState("All");

  // get active todos count
  const count = todos.filter((todo) => todo.isCompleted === false).length;

  const getFilteredList = () => {
    switch (filter) {
      case "Active":
        return todos.filter((todo) => !todo.isCompleted);
      case "Completed":
        return todos.filter((todo) => todo.isCompleted);
      default:
        return todos;
    }
  };

  const filteredList = getFilteredList();

  // Remove all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  // Delete todo item
  const removeItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle status
  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  const updateTodos = (updatedList) => {
    console.log("Updating todos:", updatedList);
    setTodos(updatedList);
  };

  console.log;
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
        toggleTodoStatus={toggleTodoStatus}
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
