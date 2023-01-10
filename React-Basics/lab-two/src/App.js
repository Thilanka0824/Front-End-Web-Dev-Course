import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MealsProvider from "./providers/MealsProvider";
import MealsList from "./components/MealsList";
import Counter from "./components/Counter";
import GlobalLayout from "./layouts/GlobalLayout";
import WalletPage from "./pages/WalletPage";
import Ternary from "./pages/Ternary";
import EmbeddedAssets from "./pages/EmbeddedAssets";
import AudioVideoPlayerPage from "./pages/AudioVideoPlayerPage";

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
          path: "/wallet",
          element: <WalletPage />,
        },
        { path: "/ternary", 
        element: <Ternary /> 
        },
        {
          path: "/assets",
          element: <EmbeddedAssets/>
        },
        {
          path: "/player",
          element: <AudioVideoPlayerPage/>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
