import { FaTimes } from 'react-icons/fa';

function Task({task, onDelete, onToggle}) {

    return (
        <div onDoubleClick={() => onToggle(task.id)} className={`task ${task.reminder ? "reminder" : ""}`}>
            <h3>{task.text} <FaTimes onClick={() => onDelete(task.id)} style={{color: "red", cursor: "pointer"}} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task;


// We use Arrow functions to call onDelete & onDoubleClick
// In order to use the Task id