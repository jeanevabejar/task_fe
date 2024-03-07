import axios from "axios";
import Cookies from "js-cookie";


const token = Cookies.get("accessToken"); 
const API_URL = "https://task-fe-seven.vercel.app";

export const createTask = async (categoryId, TaskData) => {
  const token = Cookies.get("accessToken"); 
  try {
    const response = await axios.post(`${API_URL}/categories/${categoryId}/tasks`, 
       TaskData,
     {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTask = async (categoryId) => {
  const token = Cookies.get("accessToken"); 
    try {
      const response = await axios.get(`${API_URL}/categories/${categoryId}/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {

      throw error;
      
    }
  
    
  };

export const showTask = async (categoryId, taskId) => {
  const token = Cookies.get("accessToken"); 
  try {   
    const response = await axios.get(`${API_URL}/categories/${categoryId}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTask = async (categoryId, taskData, taskId) => {
  const token = Cookies.get("accessToken"); 
  try { 
    const response = await axios.put(`${API_URL}/categories/${categoryId}/tasks/${taskId}`, 
      taskData,
   {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTask = async (categoryId, taskId) => {
  const token = Cookies.get("accessToken"); 
  try {
    const response = await axios.delete(`${API_URL}/categories/${categoryId}/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
