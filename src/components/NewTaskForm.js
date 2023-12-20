import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [textState, setTextState] = useState('')
  const [selectCatState, setSelectCatState] = useState('Code')

  const categorySelector = categories.map ((cat, index) => {
     if (cat !== 'All') { return <option key={index} value={cat}>{cat}</option>}
  })

  function handleTextChange (e) {
    setTextState(e.target.value)
  }

  function handleCategoryChange (e) {
    setSelectCatState(e.target.value)
  }
  function handleAddTask (e) {
    e.preventDefault()
    const newObj = {
      text: textState,
      category: selectCatState
    }
    onTaskFormSubmit(newObj)
    setTextState('')
  }

  return (
    <form className="new-task-form" onSubmit={handleAddTask}>
      <label>
        Details
        <input type="text" name="text" value={textState} onChange={handleTextChange}/>
      </label>
      <label>
        Category
        <select name="category" value={selectCatState} onChange={handleCategoryChange}>
          {categorySelector}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
