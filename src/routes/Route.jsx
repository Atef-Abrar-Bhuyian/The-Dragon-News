import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layout/Home";

const route = createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
        children:[
            {
                path:"",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path:"/category/:id",
                element: <h2>This Is Category</h2>
            }
        ]
    },
    {
        path:"/news",
        element:<h1>News Layout</h1>
    },
    {
        path:"/auth",
        element:<h1>Login</h1>
    },
    {
        path:"*",
        element:<h1>Error Page</h1>
    },
])

export default route;