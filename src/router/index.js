//路由配置

import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import Publish from '@/pages/Publish';
import Article from '@/pages/Article';
import Home from '@/pages/Home';

import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute> <Layout /></AuthRoute>,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'article',
        element: <Article />
      },
      {
        path: 'publish',
        element: <Publish />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
])
  
  export default router