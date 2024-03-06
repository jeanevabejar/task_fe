import axios from "axios";
import Cookies from "js-cookie";


const API_URL = "https://task-7m2us0r1b-jeanbejars-projects.vercel.app";

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

    const [tokenType, token] = authorizationHeader.split(" ");
    Cookies.set("accessToken", token);

    const user = response.data.status.data.email;
    Cookies.set("current_user", user);

    return response;
  } catch (error) {
    throw error.message;
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
    throw error.message;
  }
};

export const logout = async () => {
  try {
    const accessToken = Cookies.get("accessToken");

    if (!accessToken) {
      throw new Error("Access token not found");
    }

    const response = await axios.delete(`${API_URL}/users/sign_out`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    Cookies.remove("accessToken");
    Cookies.remove("current_user");
    return response;
  } catch (error) {
    throw error.message;
  }
};

export const isAuthenticated = () => {
  const accessToken = Cookies.get("accessToken");

  if (accessToken) {
    return true;
  } else {
    return false;
  }
};
