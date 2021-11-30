// Each form input needs a state ( COMPONENENT LEVEL STATE )
import { useState } from "react";

function AddTask({onAdd}) {

    const [text, setText] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert("Please add a Task")
            return
        }

        // Add the Task
        onAdd({ text, day, reminder });

        // Clear inputs after task is Added
        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value) } />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value) } />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input checked={reminder} type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked) } />
            </div>
            <input className="btn btn-block" type="submit" value="Add Task" />
        </form>
    )
}

export default AddTask;

