import Card from "./Card";
import TodoControls from "./TodoControls";
import "./container.css";

const TodoInfo = () => {
  return (
    <Card className='container h-flex info'>
      <div className='light actions'>5 items left</div>
      <TodoControls />
      <div className='light actions'>Clear Completed</div>
    </Card>
  );
};

export default TodoInfo;
