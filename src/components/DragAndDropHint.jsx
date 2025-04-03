import Card from "./Card";
import "./shared.css";

const DragAndDropHint = ({ filter }) =>
  filter === "All" ? (
    <Card className="light dnd">Drag and drop to reorder list</Card>
  ) : null;

export default DragAndDropHint;
