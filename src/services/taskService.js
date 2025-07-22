
// imports AXIOS library for HTTP request
import axios from 'axios'; 


// Base URL address for all task-related calls
const API_URL = 'http://localhost:8080/api/tasks'; 


// get all tasks across each projects
export const getAllTasks = () => axios.get(API_URL);


// get all tasks belonging to the specific project
export const getTasksByProject = (projectId) =>
  axios.get(`${API_URL}/project/${projectId}`);


// create a new task, sends POST request
export const createTask = (task) => axios.post(API_URL, task);


// update data in a selected/specific task (ID), sends PUT request 
export const updateTask = (id, task) => axios.put(`${API_URL}/${id}`, task);


// delete selected/specific task (ID), sends DELETE request
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);