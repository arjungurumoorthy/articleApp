import React from "react";
import "./App.scss";
import Articles from "./pages/Article";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";


const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Articles/>,
    },
    {
      path:'*',
      element: <NotFound/>
    }
  ]);
  // Function to filter and sort posts
  

return (
    <RouterProvider router={router}></RouterProvider>
  );
};


export default App;
