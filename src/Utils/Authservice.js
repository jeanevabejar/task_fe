import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:3000";

export const login = async (email, password) => {
    try {
      const response = await axios.post(
        `${API_URL}/users/sign_in`,
        {
          user: {
            email,
            password,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      const authorizationHeader = response.headers["authorization"];
      const [tokenType, token] = authorizationHeader.split(' ');
  
      Cookies.set("accessToken", token);
  
      return response;
    } catch (error) {
      throw error;
    }
  };

export const register = async (email, password, passwordConfirmation) => {
  try {
    const response = await axios.post(
      `${API_URL}/users`,
      {
        user: {
          email,
          password,
          password_confirmation: passwordConfirmation,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.delete(
      `${API_URL}/users/sign_out`,
      {
        headers: {
          Authorization:  `Bearer ${accessToken}`
        },
      }
    );

    Cookies.remove("accessToken");
    return response
  } catch (error) {
    throw error;
  }
};

export const isAuthenticated = () => {

    const accessToken = Cookies.get('accessToken');

    if (accessToken){
      return true
    } else {
      return false
    }
  };