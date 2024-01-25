// src/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
  // Aquí puedes añadir más configuraciones si es necesario
});

export default axiosInstance;
