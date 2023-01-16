import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage"
import DessertPage from "./Pages/DessertPage";
import FormPage from "./Pages/FormPage";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: "/dessertpage",
          element: <DessertPage />
        },
        {
          path: "/formpage",
          element: <FormPage/>
        }
      ],
    },
    
  ]);

  return (
    <div className="App">
    <RouterProvider router={router}/>
      <div>
       
      </div>
      <div>{/* <ToDoComp /> */}</div>
    </div>
  );
}

export default App;
