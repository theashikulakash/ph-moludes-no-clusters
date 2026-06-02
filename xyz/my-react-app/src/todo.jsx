

export default function ToDo({task, isDone}){
    if (isDone === true) {
        return <li>Done: {task}</li>
    }
    else {
        return <li>Do now: {task}</li>
    }
}