


// Importing the React and functions I made to get all projects from the backend
import React, { useEffect, useState } from 'react';
// These functions talk to the backend (API calls)
import { getAllProjects, deleteProject } from '../services/projectService';

function ProjectList({ refresh, onProjectSelect }) {
  // This holds all the projects we fetch from backend
  const [projects, setProjects] = useState([]);

  // This runs anytime 'refresh' changes — for example when a new project is added
  useEffect(() => {
    fetchProjects();
  }, [refresh]);

  // Gets all projects from backend and updates state
  const fetchProjects = () => {
    getAllProjects()
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error('Error while fetching projects:', error);
      });
  };

  // This handles deleting a project by its ID
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id)
        .then(() => {
          fetchProjects(); // Refresh after deletion
        })
        .catch((error) => {
          console.error('Error while deleting project:', error);
        });
    }
  };

  // Called when user clicks on a project — passes it up to App.jsx
  const handleSelect = (project) => {
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  };

  return (
    <div>
      <h2 className="mb-3">Project List</h2>
      <ul className="list-group">
        {projects.map((project) => (
          <li
            key={project.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => handleSelect(project)}
            >
              <strong>{project.name}</strong> – {project.description}
            </div>

            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(project.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;