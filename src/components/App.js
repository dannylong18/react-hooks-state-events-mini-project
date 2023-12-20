import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {
  const [taskState, setTaskState] = useState(TASKS)
  const [categoryState, setCategoryState] = useState(CATEGORIES)
  const [selectedTasks, setSelectedTasks] = useState('All')
  
  const filteredTasks = taskState.filter((task) => {
    if (selectedTasks === 'All') {
      return task
    }
    else if (selectedTasks === task.category) {
      return task
    }
  })

  function onTaskFormSubmit (newObj) {
    setTaskState ([...taskState, newObj])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES}  
      selectedTasks={selectedTasks}
      setSelectedTasks={setSelectedTasks}/>
      <NewTaskForm categories={categoryState} 
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} setTaskState={setTaskState}/>
    </div>
  );
}

export default App;
