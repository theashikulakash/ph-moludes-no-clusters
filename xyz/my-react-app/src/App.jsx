import ToDo from './todo';

function App() {
    return (
        <>
        
        <h1>React Core Concepts</h1>
        <ToDo task ="Learn React" isDone={true}></ToDo>
        <ToDo task ="Learn Node" isDone={false}></ToDo>
        <ToDo task ="Learn Next" isDone={true}></ToDo>

        </>
    )
}

export default App;