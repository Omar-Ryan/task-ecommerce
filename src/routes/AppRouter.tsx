import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ShoppingCart from "../pages/ShoppingCart";
import ProductDetailsPage from "../pages/ProductDetails";

// import Categories from "../pages/Categories";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <ShoppingCart /> },
      { path: "/product/:id", element: <ProductDetailsPage /> },
      // {
      //   path: "categories/products/:prefix",
      //   element: <Products />,
      //   loader: ({ params }) => {
      //     if (
      //       typeof params.prefix !== "string" ||
      //       !/^[a-z]+$/i.test(params.prefix)
      //     ) {
      //       throw new Response("Bad Request", {
      //         statusText: "Category Not Found",
      //         status: 400,
      //       });
      //     }
      //     return true;
      //   },
      // },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
