import Card from "./Card";
import "./todocontrols.css";
import "./container.css";

const TodoControls = (props) => {
  const changeFilter = (filter) => {
    props.setFilter(filter);
  };

  const HandleFilterChange = (e) => {
    changeFilter(e.target.innerText);
    console.log(e.target.innerText);
    console.log(props.filter);
  };

  return (
    <Card className="container controls">
      <div onClick={HandleFilterChange} className="accent">
        all
      </div>
      <div onClick={HandleFilterChange} className="light actions">
        active
      </div>
      <div onClick={HandleFilterChange} className="light actions">
        completed
      </div>
    </Card>
  );
};

export default TodoControls;
