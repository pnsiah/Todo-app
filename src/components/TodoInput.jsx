import Card from "./Card";
import "./container.css";

const TodoInput = () => {
  return (
    <Card className='container h-flex input-margins'>
      <div className='round'></div>
      <form action='' className='form_control'>
        <input className='todo_text' type='text' placeholder='Add todo' />
      </form>
    </Card>
  );
};

export default TodoInput;
