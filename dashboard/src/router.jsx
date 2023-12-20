import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomeAdminPages } from "./pages/HomeAdminPages";
import { ProductsListPage } from "./pages/ProductList";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <HomeAdminPages/>
            },
            {
                path: '/products',
                element: <ProductsListPage/>,
            }
        ]
    }
])