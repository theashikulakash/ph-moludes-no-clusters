

export default function ToDo({ task, isDone }) {
    // render a list item showing the task and whether it's completed
    return (
        <li
            style={{
                textDecoration: isDone ? 'line-through' : 'none',
                color: isDone ? 'gray' : 'black',
            }}
        >
            {task} {isDone ? '(done)' : ''}
        </li>
    );
}






// conditional rendering: 3 ternary
// condition ? true : false

// export default function Todo({task, isDone, time = 0}){
//     return isDone ? <li>Done: {task} time: {time}</li> : <li>Not Done: {task} time: {time}</li>
// }