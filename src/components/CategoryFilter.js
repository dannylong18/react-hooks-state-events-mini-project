import React from "react";

function CategoryFilter({categories, selectedTasks, setSelectedTasks}) {

  function handleClick (e) {
    setSelectedTasks(e.target.innerText)
  }

  const updatedCategories = categories.map ((cat) => {
      const className = cat === selectedTasks ? "selected" : " "
      return (<button 
      key={cat} 
      className={className}
      onClick={handleClick}
      >{cat}</button>)})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {updatedCategories}
    </div>
  );
}

export default CategoryFilter;
