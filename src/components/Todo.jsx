import Card from "./Card";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoControls from "./TodoControls";

const Todo = () => {
  return (
    <Card>
      <TodoInput />
      <TodoList />
      <TodoControls />
    </Card>
  );
};

export default Todo;
