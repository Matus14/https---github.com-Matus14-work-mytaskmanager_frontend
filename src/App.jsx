
import React, { useState } from 'react';
import ProjectForm from './components/projectForm';
import ProjectList from './components/projectList';

function App() {
  // This state is used to trigger re-rendering the project list when a new project is added
  const [refresh, setRefresh] = useState(false);

  // Called after a new project is created, flips the refresh state
  const handleProjectCreated = () => {
    setRefresh((prev) => !prev);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Manager</h1>

      {/* This form allows you to add a new project */}
      <ProjectForm onProjectCreated={handleProjectCreated} />

      <hr />

      {/* This component shows the list of projects */}
      <ProjectList refresh={refresh} />
    </div>
  );
}

export default App;