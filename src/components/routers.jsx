import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AddCoffee from "./AddCoffee";
import App from "../App";
import Login from './Login';


const routers = createBrowserRouter([
    {
        path:'/',
        element : <App></App>,
        children : [
            {
                path : '/' , 
                element : <Home></Home>
            },
            {
                path : '/add-new-coffee',
                element : <AddCoffee></AddCoffee>
            }
        ]
    },
    {
        path : '/login',
        element : <Login></Login>
    }
])

export default routers ;





