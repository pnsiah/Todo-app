import "./container.css";
import Card from "./Card";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";

const TodoList = () => {
  return (
    <Card className='container'>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoInfo />
    </Card>
  );
};

export default TodoList;
