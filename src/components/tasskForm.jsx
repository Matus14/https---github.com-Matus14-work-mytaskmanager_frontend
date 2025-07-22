

import React, { useState } from 'react';
import { createTask } from '../services/taskService';

function TaskForm({ projectId, onTaskCreated }) {
  // Form state – to keep track of user inputs
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('TODO');

  // When user submits the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Making a task object to send to backend
    const newTask = {
      title,
      description,
      dueDate,
      status,
      project: {
        id: projectId
      }
    };

    // Calling backend service to save the task
    createTask(newTask)
      .then(() => {
        onTaskCreated(); // Tells parent to refresh task list
        // Clear form
        setTitle('');
        setDescription('');
        setDueDate('');
        setStatus('TODO');
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4 className="mb-3">Add New Task</h4>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="date"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
          <option value="FAILED">Failed</option>
          <option value="DELAYED">Delayed</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;