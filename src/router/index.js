//路由配置

import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
// import Publish from '@/pages/Publish';
// import Article from '@/pages/Article';
// import Home from '@/pages/Home';

//1.lazy函数对组件进行导入

const Home = lazy(() => import('@/pages/Home'))
const Article = lazy(() => import('@/pages/Article'))
const Publish = lazy(() => import('@/pages/Publish'))

import { createBrowserRouter } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import { lazy, Suspense } from "react";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute> <Layout /></AuthRoute>,
    children: [
      {
        index: true,
        element: <Suspense fallback={'加载中'}><Home /></Suspense>
      },
      {
        path: 'article',
        element: <Suspense fallback={'加载中'}><Article /></Suspense>
      },
      {
        path: 'publish',
        element: <Suspense fallback={'加载中'}><Publish /></Suspense>
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
])
  
  export default router