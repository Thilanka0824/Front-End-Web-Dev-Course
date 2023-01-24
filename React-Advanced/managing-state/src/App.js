import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import FormPage from "./Pages/FormPage";
import GiftCardPage from "./Pages/GiftCardPage";
import HooksPage from "./Pages/HooksPage";
import FetchPage from "./Pages/FetchPage";
import ReducerPage from "./Pages/ReducerPage";
import CustomHooksPage from "./Pages/CustomHooksPage";
import UseRefHookPage from "./Pages/UseRefHookPage";
import ChildrenPropPage from "./Pages/ChildrenPropPage";
import { cloneElement } from "react";
import CloneElementPage from "./Pages/CloneElementPage";

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
          element: <HooksPage />,
        },
        {
          path: "/userefhookpage",
          element: <UseRefHookPage />,
        },
        {
          path: "/hookspage/custom",
          element: <CustomHooksPage />,
        },
        {
          path: "/fetchpage",
          element: <FetchPage />,
        },
        {
          path: "/reducerpage",
          element: <ReducerPage />,
        },
        {
          path: "/childrenproppage",
          element: <ChildrenPropPage />,
        },
        {
          path: "/cloneelement",
          element: <CloneElementPage/>
        }
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
