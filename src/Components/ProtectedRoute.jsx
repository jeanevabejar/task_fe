import { redirect } from "react-router-dom";
import { isAuthenticated } from "../Utils/Authservice";

import { useLocation} from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = isAuthenticated();
  const location = useLocation();

  if (isLoggedIn === false) {
    // Redirect to the signin page
    return redirect("/signin");
    // Return null or any loading indicator if needed
  }

  if (isLoggedIn && location.pathname === "/signin" || location.pathname === "/signup" ) {
  return  redirect("/");
  }

  return null;
};

export default ProtectedRoute;