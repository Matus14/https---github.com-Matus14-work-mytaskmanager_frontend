
// imports AXIOS library for HTTP request
import axios from 'axios';


// Base URL address for all project-related calls
const API_URL = 'http://localhost:8080/api/projects';


// get all projects from database
export const getAllProjects = () => axios.get(API_URL)


// create a new project, sends POST request
export const createProject = (project) => axios.post(API_URL, project)


// update existing project based on ID, sends PUT request
export const updateProject = (id, project) => axios.put('${API_URL}/${id}', project);


// delete project based on ID, sends DELETE request
export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);