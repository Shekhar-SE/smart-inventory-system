import axios from 'axios';
const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchInventory = () => API.get('/inventory');
export const createInventoryItem = (newItem) => API.post('/inventory', newItem);
export const loginUser = (formData) => API.post('/auth/login', formData);
export const registerUser = (formData) => API.post('/auth/register', formData);
