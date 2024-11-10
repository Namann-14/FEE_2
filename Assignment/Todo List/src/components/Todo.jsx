import React, { useState } from 'react';

const Todo = () => {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTask((t) => [...t, newTask]);
      setNewTask('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const removeTask = (index) => {
    setTask((t) => t.filter((_, i) => i !== index));
  };

  const moveUp = (index) => {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
      setTask(updatedTask);
    }
  };

  const moveDown = (index) => {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
      setTask(updatedTask);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={newTask} onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <button onClick={addTask}>Add!</button>
      <ol>
        {task.map((element, index) => {
          return (
            <li key={index}>
              {element}
              <button onClick={() => removeTask(index)}>Delete</button>
              <button onClick={() => moveUp(index)}>Move up</button>
              <button onClick={() => moveDown(index)}>Move down</button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Todo;
