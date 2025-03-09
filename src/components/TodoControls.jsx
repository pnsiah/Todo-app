import Card from "./Card";
import "./todocontrols.css";
import "./container.css";

const TodoControls = () => {
  return (
    <Card className='container controls'>
      <div className='accent'>All</div>
      <div className='light actions'>Active</div>
      <div className='light actions'>Completed</div>
    </Card>
  );
};

export default TodoControls;
