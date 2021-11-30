import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {

  // Data is brought by JSON SERVER fake rest api / database 
  
  // useState Hooks
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  
  // useEffect Hook called when page loads & reloads
  useEffect(() => {
    // Get the Tasks From the database when the page reloads
     fetchTasks();
  }, []);


  const fetchTasks = () => {
     fetch("http://localhost:5000/tasks")
     .then((res) => res.json())
     .then((data) => {
       return setTasks(data);
     })
  }


  // Add Task 
  const addTask = (task) => {    
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    .then((res) => res.json())
    .then((data) =>  {
       setTasks([...tasks, data]);
    });

  }

  // Delete Task
  const deleteTask = (id) => {
    // Delete from Database
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    
    // Delete from UI
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
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
        (<Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask}/>) : (<h3>No tasks to show</h3>)
      }
    </div>
  );
}

export default App;
