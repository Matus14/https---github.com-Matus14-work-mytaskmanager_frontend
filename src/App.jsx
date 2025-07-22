
import React, { useState } from 'react';
import ProjectForm from './components/projectForm';
import ProjectList from './components/projectList';
import TaskForm from './components/taskForm';
import TaskList from './components/taskList';

function App() {
  // This state keeps track of the currently selected project
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // This helps refresh task list after a new task is added
  const [refreshTasks, setRefreshTasks] = useState(false);

  // When a project is selected, store its ID
  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
  };

  // Flips refresh state when a task is added, forcing re-render of task list
  const handleTaskCreated = () => {
    setRefreshTasks((prev) => !prev);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Task Manager</h1>

      {/* Form to add a new project */}
      <ProjectForm />

      <hr />

      {/* Displays list of all projects. When a project is clicked, its ID is passed to the App state */}
      <ProjectList onProjectClick={handleProjectClick} />

      <hr />

      {/* When a project is selected, show task form and task list */}
      {selectedProjectId && (
        <>
          {/* Form to add new task to selected project */}
          <TaskForm projectId={selectedProjectId} onTaskCreated={handleTaskCreated} />

          <hr />

          {/* Task list for selected project, reloaded on refresh toggle */}
          <TaskList projectId={selectedProjectId} refresh={refreshTasks} />
        </>
      )}
    </div>
  );
}

export default App;