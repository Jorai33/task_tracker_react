import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  // Data Normally brought with an API
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

  // useState Hook (with "defaultTasks" as Initial "tasks" VALUE )
  const [tasks, setTasks] = useState(defaultTasks);
  
  return (

    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
