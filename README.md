## MyTaskManager Frontend (React + Vite)

This is the frontend part of the **MyTaskManager** full-stack project, built using **React** and **Vite**.  
The app provides a simple and clean UI to create and manage projects by communicating with a Spring Boot REST API backend.


## Technologies Used

-  React (with functional components and hooks)
-  Vite (lightweight, fast development server & bundler)
-  Axios (for REST API communication)
-  Bootstrap (CSS styling)
-  Git & GitHub (version control, branches)


##  Features

- Add new projects using form input
- View a list of all projects fetched from backend
- Delete projects with confirmation dialog
- Auto-refresh project list on creation/deletion
- Structured project/service/component architecture
- Ready to expand with task management


## Project Structure

src/
├── components/
│ ├── projectForm.jsx # Form to create new projects
│ └── projectList.jsx # List of existing projects with delete option
├── services/
│ ├── projectService.js # API calls for projects
│ └── taskService.js # Prepared service layer for tasks
├── App.jsx # Combines components, handles refresh logic
├── main.jsx # App entry point
├── index.css / App.css # Custom styling
├── vite.config.js # Vite configuration


## API Integration (Axios)

All project-related actions are handled through Axios in projectService.js.

| Action         | Method | Endpoint             |
| -------------- | ------ | -------------------- |
| Get all        | GET    | `/api/projects`      |
| Create new     | POST   | `/api/projects`      |
| Update project | PUT    | `/api/projects/{id}` |
| Delete project | DELETE | `/api/projects/{id}` |


## Learning Objectives

- Tha MAIN onjective was to simulate "real-world" development to better understand the whole process
- Understand and use React functional components (useState, useEffect)
- Build and structure a Single Page Application (SPA) in React
- Communicate with backend using Axios and RESTful API
- Implement a refresh pattern between components via props
- Apply component-driven development
- Set up and run a modern React app using Vite
- Connect React app to Spring Boot backend
- Use Bootstrap to style forms and lists
- Organize logic into services and components folders
- Use Git + GitHub with branching (feature/forms-frontend) and clear commit history
- Development follows feature-branch model (e.g. feature/forms-frontend)
- Clear, descriptive commits (e.g. Add project list component, Connect API to form)
- All work tracked publicly via GitHub to simulate professional collaboration


## AUTHOR ##
Created by Matúš Bučko as part of a full-stack portfolio project using technologies learned in a web application development bootcamp.


