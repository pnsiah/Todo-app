import Background from "./components/Background";
import Card from "./components/Card";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Background />
      <Card className="content">
        <Header />
        <Todo></Todo>
      </Card>
    </>
  );
}

export default App;
