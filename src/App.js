import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  // Data Normally brought with an API
  // useState Hook (with "defaultTasks" as Initial "tasks" VALUE )
  const [tasks, setTasks] = useState([
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
    ]);

  const [shoWAddTask, setShowAddTask] = useState(false);

  // Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {
     return task.id !== id;
    }));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => {
      return (
        task.id === id ? 
        // Return the same task except the reminder which is inverted
          { ...task, reminder: !task.reminder } :
          // Or the task itself
          task
      );
    }))
  }
  
  return (

    <div className="container">
      <Header onAdd={() => setShowAddTask(!shoWAddTask)}/>
      {shoWAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        (<Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask}/>) : (<h3>No tasks to show</h3>)
      }
    </div>
  );
}

export default App;
