import Card from "./Card";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "./shared.css";

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
            index={index}
            id={todo.id}
            key={todo.id}
            toggleTodoStatus={props.toggleTodoStatus}
            todos={props.todos}
            filter={props.filter}
            removeItem={props.removeItem}
            updateTodos={props.updateTodos}
          />
        ))
      ) : (
        <EmptyTodo />
      )}

      <TodoInfo
        filter={props.filter}
        setFilter={props.setFilter}
        count={props.count}
        clearCompleted={props.clearCompleted}
      />
    </Card>
  );
};

export default TodoList;
