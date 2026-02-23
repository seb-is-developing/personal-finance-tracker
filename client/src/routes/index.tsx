import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/home";
import SignUp from "../pages/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
