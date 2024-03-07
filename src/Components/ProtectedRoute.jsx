import { redirect } from "react-router-dom";
import { isAuthenticated } from "../Utils/Authservice";


const ProtectedRoute = () => {
  const isLoggedIn = isAuthenticated();

  if (isLoggedIn === false) {
    return redirect("/signin");
  }

  return null;
};

export default ProtectedRoute;