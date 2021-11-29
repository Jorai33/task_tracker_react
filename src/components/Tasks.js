import React, { Fragment } from "react";
import Task from "./Task";

function Tasks({tasks, onDelete, onToggle}) {
    return (
        <Fragment>
            {tasks.map((task) => {
               return <Task onToggle={onToggle} key={task.id} task={task} onDelete={onDelete} />
            })}
        </Fragment>
    )
}

export default Tasks;
