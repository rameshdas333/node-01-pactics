import {
  createBrowserRouter,
  
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component:Layout,
    children:[
        {index:true,Component:Home}
    ]
  },
]);
export default router;