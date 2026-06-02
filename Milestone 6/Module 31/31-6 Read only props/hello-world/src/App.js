import './App.css';
import ToDo from './todo';

function App() {
  // render a simple list of todos to match what was attempted in app.jsx
  return (
    <>
      <h1>My To‑Do List</h1>
      <ul>
        <ToDo task="Learn React" isDone={true} />
        <ToDo task="Learn Node" isDone={false} />
        <ToDo task="Learn Next" isDone={true} />
      </ul>
    </>
  );
}

export default App;
