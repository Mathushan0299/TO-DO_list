import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState(''); // For task description
  const [eventType, setEventType] = useState('Official'); // For event type with default value
  const [eventDate, setEventDate] = useState(''); // For event date
  const [eventTime, setEventTime] = useState(''); // For event time

  const handleAddTask = () => {
    if (input.trim() && eventDate && eventTime) {
      const newTask = {
        text: input,
        eventType: eventType,
        dateTime: `${eventDate} ${eventTime}`,
        completed: false,
        addedOn: new Date().toLocaleString(), // Date when the task was added
      };
      setTasks([...tasks, newTask]);
      setInput('');
      setEventType('Official'); // Reset to default option
      setEventDate('');
      setEventTime('');
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
      <h2>To-Do List with Events</h2>

      {/* Input for Task Description */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />

      {/* Dropdown for Event Type */}
      <select
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        style={{ marginLeft: '10px' }}
      >
        <option value="Official">Official</option>
        <option value="Non-official">Non-official</option>
      </select>

      {/* Input for Event Date */}
      <input
        type="date"
        value={eventDate}
        onChange={(e) => setEventDate(e.target.value)}
        style={{ marginLeft: '10px' }}
      />

      {/* Input for Event Time */}
      <input
        type="time"
        value={eventTime}
        onChange={(e) => setEventTime(e.target.value)}
        style={{ marginLeft: '10px' }}
      />

      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '5px 10px',
          margin: '10px',
        }}
      >
        Add
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <div>
              <strong>Task:</strong> {task.text}
              <br />
              <strong>Event Type:</strong> {task.eventType}
              <br />
              <strong>Scheduled Date & Time:</strong> {task.dateTime}
              <br />
              <span style={{ fontSize: '0.8em', color: 'gray' }}>
                <strong>Added On:</strong> {task.addedOn}
              </span>
            </div>

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
