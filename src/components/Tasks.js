import React, { Fragment } from "react";
import Task from "./Task";

function Tasks({tasks}) {
    return (
        <Fragment>
            {tasks.map((task) => {
               return <Task key={task.id} task={task} />
            })}
        </Fragment>
    )
}

export default Tasks;
