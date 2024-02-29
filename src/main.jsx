import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ProtectedRoute from "./Components/ProtectedRoute";
import { CreateForm } from "./Components/Form";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: ProtectedRoute,
  },
  {
    path: "/addcategory",
    element: <CreateForm />,
    loader: ProtectedRoute,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);