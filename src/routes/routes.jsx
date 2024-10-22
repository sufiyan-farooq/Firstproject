
import { createBrowserRouter,Navigate } from "react-router-dom";


import Home from "../pages/home";
import About from "../pages/about";
import Layout from "./layout";
import ShowProduct from "../pages/product";
import ProductView from "../components/productViewCard";
import CheckOut from "../pages/checkout";


const router = createBrowserRouter([
    {
      path: '/' ,
      element : <Layout/>,

        children: [
        { 
          index: true, 
          element: <Navigate to="/home" replace />  
        },

        {
            path: '/home',
            element: <Home />,
          },
    
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/product',
          element: <ShowProduct />,
        },
        {
          path: '/products/:id',
          element: <ProductView />,
        },
        {
          path: '/checkout',
          element: <CheckOut/>,
        },
  
        
    
      ]
    },  
    
  
  ])

  export default router;