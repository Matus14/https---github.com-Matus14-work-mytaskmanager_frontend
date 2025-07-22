
import React, { useState } from 'react';
import ProjectForm from './components/projectForm';
import ProjectList from './components/projectList';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

function App() {
  // This keeps track of which project was clicked so tasks can be linked to it
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Used to force task list to reload when a task is added
  const [refreshTasks, setRefreshTasks] = useState(false);

  // When a project is selected from the list, this stores its ID
  const handleProjectSelect = (project) => {
    setSelectedProjectId(project.id); // using project.id from the ProjectList callback
  };

  // This just flips a flag to re-trigger the task list component
  const handleTaskCreated = () => {
    setRefreshTasks((prev) => !prev);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Manager</h1>

      {/* This form lets user add a new project */}
      <ProjectForm />

      <hr />

      {/* All existing projects are listed here – click one to load its tasks */}
      <ProjectList onProjectSelect={handleProjectSelect} />

      <hr />

      {/* If a project is selected, show task-related components */}
      {selectedProjectId && (
        <>
          {/* Add a new task to the selected project */}
          <TaskForm projectId={selectedProjectId} onTaskCreated={handleTaskCreated} />

          <hr />

          {/* Show tasks that belong to the selected project */}
          <TaskList projectId={selectedProjectId} refresh={refreshTasks} />
        </>
      )}
    </div>
  );
}

export default App;