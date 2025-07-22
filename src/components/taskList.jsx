

import React, { useEffect, useState } from 'react';
import { getTasksByProject, deleteTask } from '../services/taskService';

function TaskList({ projectId, refresh }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (projectId) {
      fetchTasks();
    }
  }, [projectId, refresh]);

  const fetchTasks = () => {
    getTasksByProject(projectId)
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.error('Error loading tasks:', err);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(id)
        .then(() => fetchTasks())
        .catch((err) => console.error('Error deleting task:', err));
    }
  };

  return (
    <div>
      <h4>Tasks for Project ID: {projectId}</h4>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{task.name}</strong> – {task.description}
            </div>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;