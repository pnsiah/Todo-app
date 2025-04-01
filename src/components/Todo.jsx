import Card from "./Card";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";
import DragAndDropHint from "./DragAndDropHint";
import { useState } from "react";

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

  // Delete todoitem
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

  // Update todo after drag and drop
  const updateTodos = (updatedList) => {
    setTodos(updatedList);
  };

  return (
    <Card>
      <TodoInput
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        HandleAddTodo={HandleAddTodo}
        setFilter={setFilter}
        filter={filter}
      />
      <TodoList
        count={count}
        todos={filteredList}
        toggleTodoStatus={toggleTodoStatus}
        clearCompleted={clearCompleted}
        removeItem={removeItem}
        updateTodos={updateTodos}
        filter={filter}
        setFilter={setFilter}
      />
      <TodoControls filter={filter} setFilter={setFilter} />
      <DragAndDropHint filter={filter} />
    </Card>
  );
};

export default Todo;
