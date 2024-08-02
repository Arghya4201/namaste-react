import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      {/* Whenever a path change occurs in the path, that respective component is pushed after header, this outlet feature is given by RouterProvider */}
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path :"/",
        element: <Body></Body>
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        // now resId is a dynamic value that we will pass
        path: "/restaurants/:resID",
        element: <RestaurantMenu></RestaurantMenu>
      }
    ],
    errorElement: <Error></Error>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
// root.render(<AppLayout />);
console.log(parent);
