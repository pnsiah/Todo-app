import "./container.css";
import Card from "./Card";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";

const EmptyTodo = () => {
  return (
    <Card className="container">
      <div className="error border">No Todo</div>
    </Card>
  );
};

const TodoList = (props) => {
  return (
    <Card className="container">
      {props.todos.length > 0 ? (
        props.todos.map((todo, index) => (
          <TodoItem
            subject={todo.subject}
            status={todo.isCompleted}
            id={Math.random().toString()}
            index={index}
            key={index}
            changeStatus={props.changeStatus}
            removeItem={props.removeItem}
            allTodos={props.allTodos}
            updateTodos={props.updateTodos}
          />
        ))
      ) : (
        <EmptyTodo />
      )}

      <TodoInfo
        setFilter={props.setFilter}
        count={props.count}
        clearCompleted={props.clearCompleted}
      />
    </Card>
  );
};

export default TodoList;
