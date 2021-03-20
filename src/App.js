import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Coffe making",
      day: "Everyday",
      reminder: false,
    },
    {
      id: 2,
      text: "Learning",
      day: "Feb 20th at 10am",
      reminder: true,
    },
    {
      id: 3,
      text: "Workout",
      day: "Feb 21th at 2pm",
      reminder: true,
    },
  ]);

  // Add task
  const addTask = (task) => {
    const id = Math.floor(Math.random()* 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(
        !showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
