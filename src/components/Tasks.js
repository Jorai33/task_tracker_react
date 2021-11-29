import React, { Fragment } from "react";

import { useState } from "react";

function Tasks() {

    const defaultTasks = [
        {
            id: 1,
            text: "Doctor's Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true
        },
        {
            id: 2,
            text: "Meeting at School",
            day: "Feb 6th at 1:30pm",
            reminder: true
        },
        {
            id: 3,
            text: "Food Shopping",
            day: "Feb 7th at 3:45pm",
            reminder: false
        }
        ];

    const [tasks, setTasks] = useState(defaultTasks);

    return (
        <Fragment>
            {tasks.map((task) => {
               return <h3 key={task.id}>{task.text}</h3>
            })}
        </Fragment>
    )
}

export default Tasks;
