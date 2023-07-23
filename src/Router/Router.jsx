import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Colleges from "../Page/Colleges/Colleges";
import Admission from "../Page/Admission/Admission";
import MyCollege from "../Page/MyCollege/MyCollege";
import Login from "../Page/Login/Login";
import SingUp from "../Page/SingUp/SIngUp";
import PrivetRoute from "./PrivetRoute";
import Details from "../Page/Details/Details";
import { collegeLoader } from "../Utilities/college";
import Apply from "../Page/Admission/Apply";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home/>             
        },
        {
            path:'/college',
            element:<Colleges/>
        },
        {
            path:'/admission',
            element:<Admission/>
        },
        {
            path:'/mycollege',
            element:<PrivetRoute><MyCollege/></PrivetRoute>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/singUp',
            element:<SingUp/>
        },
        {
            path:'/detail/:_id',
            element:<Details/>,
            loader:({params})=>collegeLoader(params._id)
        },
        {
            path:'/apply',
            element:<PrivetRoute><Apply/></PrivetRoute>
        }
      ]
    },
  ]);

  export default router