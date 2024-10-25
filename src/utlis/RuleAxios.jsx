import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api/rules", // Your backend API URL
  //   timeout: 10000,
  withCredentials: true,
});

// Add interceptors for request/response handling
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can add custom headers here if needed
//     // For example: config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // You can handle successful responses here
//     return response;
//   },
//   (error) => {
//     // You can handle error responses here
//     // For example: if (error.response.status === 401) { // handle unauthorized }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
