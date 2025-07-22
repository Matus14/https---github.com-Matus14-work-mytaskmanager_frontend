


// Importing the React and functions I made to get all projects from the backend
import React, { useEffect, useState } from 'react';
import { getAllProjects, deleteProject } from '../services/projectService';

function ProjectList({ refresh }) {
// Here in this list I keep all project which are comming from backend
  const [projects, setProjects] = useState([]);

  

// This part runs when there is a refresh or a change(added new project )
  useEffect(() => {
    fetchProjects(); // load the projects from the backend
  }, [refresh]);

  const fetchProjects = () => {
    // Calling function to get all projects
    getAllProjects()
      .then((response) => {
        // Save the project in state so it can be displayed
        setProjects(response.data);
      })
      .catch((error) => {
        // If there is an error, this will handle it
        console.error('Error in projects:', error);
      });
  };

  // This part runs when delete button is used.
  const handleDelete = (id) => {
    // Pop up message to make sure the user really wants to delete project
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(id)
        .then(() => {
            // Once deleted, refresh the project list
          fetchProjects(); 
        })
        .catch((error) => {
            // If there is problem, error message hadle this.
          console.error('Error deleting project:', error);
        });
    }
  };

  return (
    <div>
      <h2 className="mb-3">Project List</h2>
      <ul className="list-group">
        {/* Loop through all the projects and display each as a list item */}
        {projects.map((project) => (
          <li
            key={project.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{project.name}</strong> – {project.description}
            </div>
            {/* Delete button that runs handleDelete when clicked */}
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
