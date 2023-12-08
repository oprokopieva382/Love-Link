import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import {Error} from './pages/Error.jsx'
import { Intro } from "./pages/Intro.jsx";
import {Entry} from "./pages/Entry";
import {Profile} from "./pages/Profile";
import {Matches} from "./pages/Matches";
import {InTarget} from "./pages/InTarget";
import {Conversation} from "./pages/Conversation";
import { Greeting } from "./pages/Greeting.jsx";
import { QuestionOne } from "./pages/QuestionOne.jsx";
import { QuestionTwo } from "./pages/QuestionTwo.jsx";
import { QuestionThree } from "./pages/QuestionThree.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Intro />,
      },
      {
        path: "/login",
        element: <Entry />,
      },
      {
        path: "/greeting",
        element: <Greeting />,
      },
      {
        path: "/question1",
        element: <QuestionOne />,
      },
      {
        path: "/question2",
        element: <QuestionTwo />,
      },
      {
        path: "/question3",
        element: <QuestionThree />,
      },
      {
        path: "/question4",
        element: <QuestionThree />,
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
