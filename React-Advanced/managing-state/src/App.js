import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import FormPage from "./Pages/FormPage";
import GiftCardPage from "./Pages/GiftCardPage";
import HooksPage from "./Pages/HooksPage";
import FetchPage from "./Pages/FetchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/formpage",
          element: <FormPage />,
        },
        {
          path: "/giftcardpage",
          element: <GiftCardPage />,
        },
        {
          path: "/hookspage",
          element: <HooksPage/>
        },
        {
          path: "/fetchpage",
          element: <FetchPage/>
        }
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
      <div></div>
    </div>
  );
}

export default App;
