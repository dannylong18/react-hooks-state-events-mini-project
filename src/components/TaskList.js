import React from "react";
import Task from "./Task"

function TaskList({tasks, setTaskState}) {
  
  const taskDisplay = tasks.map((task) => {
    return <Task task={task} key={task.text} handleDelete={handleDelete} text={task.text} category={task.category}/>
  })

  function handleDelete (taskToDelete) {
    const updatedTaskList = tasks.filter((task) => task !== taskToDelete)
    setTaskState(updatedTaskList)
  }

  return (
    <div className="tasks">
      {taskDisplay}
    </div>
  );
}

export default TaskList;
