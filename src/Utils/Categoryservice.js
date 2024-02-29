import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("accessToken"); 
const API_URL = "http://127.0.0.1:3000";

export const createCategory = async (categoryName) => {
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
  };

export const showCategory = async (categoryId) => {
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
