import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer"
import { Outlet, createBrowserRouter,Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import ("./components/Grocery"))
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path: "/",
        element: <Body />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/contact",
        element: <Contact />
      },
      {
        path:"/grocery",
        element: <Suspense fallback={<h2>Loading........</h2>}><Grocery /></Suspense>
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}/>);