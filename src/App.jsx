import Background from "./components/Background";
import Card from "./components/Card";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./components/container.css";

function App() {
  return (
    <>
      <Background />
      <Card className='content'>
        <Header />
        <Todo></Todo>
      </Card>
    </>
  );
}

export default App;
