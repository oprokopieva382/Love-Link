import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Error from './pages/Error'
import Entry from "./pages/Entry";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Matches from "./pages/Matches";
import InTarget from "./pages/InTarget";
import Conversation from "./pages/Conversation";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Entry />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "profile/",
        element: <Profile />,
      },
      {
        path: "matches",
        element: <Matches />,
      },
      {
        path: "inTarget",
        element: <InTarget />,
      },
      {
        path: "conversation",
        element: <Conversation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
