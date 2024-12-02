import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput(''); // Clear the input field after adding
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '5px 10px',
          margin: '5px',
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.text}
            <button
              onClick={() => handleToggleTask(index)}
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '5px 10px',
                margin: '5px',
              }}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => handleDeleteTask(index)}
              style={{
                backgroundColor: 'red',
                color: 'white',
                padding: '5px 10px',
                margin: '5px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
