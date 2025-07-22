

// Importing React and useState to store and update form inputs
import React, { useState } from 'react';
// Importing the function that sends data to backend
import { createProject } from '../services/projectService';

function ProjectForm({ onProjectCreated }) {
  // This state stores form inputs as the user types
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  // This function runs every time user types into an input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // This runs when user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page from reloading
    try {
      await createProject(formData); // Send form data to backend
      setFormData({ name: '', description: '', startDate: '', endDate: '' }); // Clear form
      onProjectCreated(); // Tell parent (App.jsx) to refresh project list
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-3">Create New Project</h2>

      <div className="mb-2">
        <label className="form-label">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Description:</label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Start Date:</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-2">
        <label className="form-label">End Date:</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">Create Project</button>
    </form>
  );
}

export default ProjectForm;