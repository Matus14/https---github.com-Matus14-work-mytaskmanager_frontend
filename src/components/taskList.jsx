

// Bringing in React stuff and the functions that help with getting and deleting tasks
import React, { useEffect, useState } from 'react';
import { getTasksByProject, deleteTask } from '../services/taskService';

function TaskList({ projectId, refresh }) {
  // This is where the tasks for the selected project are stored
  const [tasks, setTasks] = useState([]);

  // Every time the selected project or refresh signal changes, this runs
  useEffect(() => {
    if (projectId) {
      fetchTasks();
    }
  }, [projectId, refresh]);

  // Pulls all the tasks for a given project from the backend
  const fetchTasks = () => {
    getTasksByProject(projectId)
      .then((response) => {
        setTasks(response.data); // Fills the state with tasks
      })
      .catch((error) => {
        console.error('Error loading tasks:', error); // Just in case there's an issue
      });
  };

  // This gets triggered when the user clicks the "Delete" button next to a task
  const handleDelete = (id) => {
    if (window.confirm('Do you really want to delete this task?')) {
      deleteTask(id)
        .then(() => {
          fetchTasks(); // Reload the list after one is deleted
        })
        .catch((error) => {
          console.error('Error deleting task:', error);
        });
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Tasks</h4>

      {/* If there are no tasks, show a message, otherwise list them all */}
      {tasks.length === 0 ? (
        <p>No tasks for this project yet.</p>
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {/* Display title and status, and a small description */}
              <div>
                <strong>{task.title}</strong> – {task.status} <br />
                <small>{task.description}</small>
              </div>

              {/* Delete button for each task */}
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
