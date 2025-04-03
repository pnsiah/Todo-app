import Card from "./Card";
import "./todocontrols.css";
import "./shared.css";

const TodoControls = (props) => {
  const HandleFilterChange = (e) => {
    console.log("clicked");
    props.setFilter(e.target.innerText);
  };

  return (
    <Card className="container controls">
      <div
        onClick={HandleFilterChange}
        className={`light actions ${props.filter === "All" ? "accent" : ""}`}
      >
        All
      </div>
      <div
        onClick={HandleFilterChange}
        className={`light actions ${props.filter === "Active" ? "accent" : ""}`}
      >
        Active
      </div>
      <div
        onClick={HandleFilterChange}
        className={`light actions ${props.filter === "Completed" ? "accent" : ""}`}
      >
        Completed
      </div>
    </Card>
  );
};

export default TodoControls;
