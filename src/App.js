import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home";
import Explore from "./components/Explore";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/explore", element: <Explore /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
