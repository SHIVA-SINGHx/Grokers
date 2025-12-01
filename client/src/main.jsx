import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvider from "./context/AppContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductCart from "./components/ProductCart";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar.jsx";

const router = createBrowserRouter([
  { path: "/", element: <><Navbar/> <Home /> </> },
  { path: "/products", element: <><Navbar/> <ProductCart /> </> },
  { path: "/product/:id", element: <ProductDetails /> },
  { path: "/cart", element: <Cart /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </RouterProvider>
  </StrictMode>
);
