import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
