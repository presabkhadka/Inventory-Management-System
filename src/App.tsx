import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Payment from "./payment";
import Product from "./product";
import Dashboard from "./dashboard";
import Login from "./authorization/login";
import Signup from "./authorization/signup";
import Inventory from "./inventory";
import AddedProduct from "./addedProduct";
import Reports from "./reports";
import Orders from "./orders";
import ManageStore from "./manageStore";
import Suppliers from "./suppliers";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider
        router={createBrowserRouter([
          { path: "/", element: <Dashboard /> },
          { path: "/product", element: <Product /> },
          { path: "/payment", element: <Payment /> },
          { path: "/login", element: <Login /> },
          { path: "/signup", element: <Signup /> },
          { path: "/inventory", element: <Inventory /> },
          { path: "/added", element: <AddedProduct /> },
          { path: "/reports", element: <Reports /> },
          { path: "/orders", element: <Orders /> },
          { path: "/manage", element: <ManageStore /> },
          { path: "/suppliers", element: <Suppliers /> },
        ])}
      ></RouterProvider>
      </ThemeProvider>
  );
}
export default App;
