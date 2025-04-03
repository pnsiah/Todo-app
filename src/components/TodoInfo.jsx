import Card from "./Card";
import TodoControls from "./TodoControls";
import "./shared.css";

const TodoInfo = (props) => {
  const clearHandler = () => {
    props.clearCompleted();
  };
  return (
    <Card className="container h-flex info">
      <div className="light actions">{props.count} items left</div>
      <TodoControls filter={props.filter} setFilter={props.setFilter} />
      <div className="light actions" onClick={clearHandler}>
        Clear Completed
      </div>
    </Card>
  );
};

export default TodoInfo;
