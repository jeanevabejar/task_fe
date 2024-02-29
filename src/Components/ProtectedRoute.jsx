import { redirect } from "react-router-dom";
import { isAuthenticated } from "../Utils/Authservice";

const ProtectedRoute = () => {
  const isLoggedIn = isAuthenticated();


  if (isLoggedIn === false) {
    // Redirect to the signin page
    return redirect("/signin");
    // Return null or any loading indicator if needed
  }
  return null;
};

export default ProtectedRoute;