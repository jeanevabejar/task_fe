import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("accessToken"); 
const API_URL = "https://task-pocq8uba3-jeanbejars-projects.vercel.app";

export const createCategory = async (categoryName) => {
  const token = Cookies.get("accessToken"); 
  try {
    const response = await axios.post(`${API_URL}/categories`, {
      category: { name: categoryName },
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCategory = async () => {
  const token = Cookies.get("accessToken"); 
  if(token){
     try {
      const response = await axios.get(`${API_URL}/categories`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
   
  };

export const showCategory = async (categoryId) => {
  const token = Cookies.get("accessToken"); 
  try {   
    const response = await axios.get(`${API_URL}/categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (categoryId, categoryData) => {
  const token = Cookies.get("accessToken"); 
  try { 
    const response = await axios.put(`${API_URL}/categories/${categoryId}`, {
      category: categoryData,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (categoryId) => {
  const token = Cookies.get("accessToken"); 
  try {
    const response = await axios.delete(`${API_URL}/categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
