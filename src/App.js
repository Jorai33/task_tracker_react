import { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

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


  // Fetch Tasks (GET Request)
  const fetchTasks = () => {
     fetch("http://localhost:5000/tasks")
     .then((res) => res.json())
     .then((data) => {
       return setTasks(data);
     })
  }

   // Fetch 1 Task (GET Request)
   const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    
    return data;
 }



  // Add Task 
  const addTask = (task) => {    
    // Add Task to Database (POST Request)
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    .then((res) => res.json())
    .then((data) =>  {
      // Add task to UI
       setTasks([...tasks, data]);
    });

  }

  // Delete Task 
  const deleteTask = (id) => {
    // Delete from Database (DELETE Request)
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    
    // Delete from UI
    setTasks(tasks.filter((task) => {
     return task.id !== id;
    }));
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    // Define the task to modify (in Database)
    const taskToToggle = await fetchTask(id);
    // Create a New Task with the same fields except the reminder which is inverted
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder};

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();


    // Modify Reminder value in the UI
    setTasks(tasks.map((task) => {
      return (
        task.id === id ? 
        // Return the Task with an Updated reminder 
          { ...task, reminder: data.reminder } :
          // Or the task itself
          task
      );
    }))
  }
  
  return (
    <Router>
      <div className="container">
        <Header 
          onAdd={() => setShowAddTask(!showAddTask)} 
          showAdd={showAddTask}
        />
       
        <Routes>
          <Route 
            path="/" 
            element={
            <Fragment>
              {showAddTask && <AddTask onAdd={addTask}/>}
              {tasks.length > 0 ? 
                (<Tasks onToggle={toggleReminder} tasks={tasks} onDelete={deleteTask}/>) : (<h3>No tasks to show</h3>)
              }
          </Fragment>} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
