import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../componets/Home/Home";
import Registration from "../componets/Rgistration/Registration";
import Login from "../componets/Login/Login";
import Product from "../componets/Product/Product";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/product',
                element: <Product></Product>
            }
        ]
    }

])