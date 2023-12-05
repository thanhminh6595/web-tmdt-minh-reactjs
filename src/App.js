import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { loader as productLoader } from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import RootPage from "./pages/RootPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      id: "root",
      loader: productLoader,
      children: [
        {
          path: "",
          id: "home-loader",
          element: <HomePage />,
          loader: productLoader,
        },
        { path: "shop", element: <ShopPage /> },
        { path: "detail", element: <DetailPage /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: <CheckoutPage /> },
        { path: "login", element: <LoginPage /> },
        {
          path: "register",
          element: <RegisterPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
