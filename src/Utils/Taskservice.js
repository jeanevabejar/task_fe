import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("accessToken"); 
const API_URL = "http://127.0.0.1:3000";

export const createTask = async (categoryId, TaskData) => {
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
    try {
      const response = await axios.post(`${API_URL}/categories/${categoryId}/tasks`, {
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
