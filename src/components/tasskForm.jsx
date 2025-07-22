
import React, { useState } from 'react';
import { createTask } from '../services/taskService';

function TaskForm({ onTaskCreated }) {
  const [task, setTask] = useState({
    name: '',
    description: '',
    projectId: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.name || !task.projectId) {
      alert("Task name and project ID are required");
      return;
    }

    createTask(task)
      .then(() => {
        setTask({ name: '', description: '', projectId: '' });
        onTaskCreated(); // refresh list
      })
      .catch((error) => {
        console.error('Error creating task:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h4>Add Task</h4>
      <div className="mb-2">
        <input
          type="text"
          name="name"
          placeholder="Task name"
          value={task.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          name="projectId"
          placeholder="Project ID"
          value={task.projectId}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default TaskForm;