import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Blog, { loader as blogLoader } from './pages/Blog.tsx'
import BlogPost, { loader as blogPostLoader } from './pages/BlogPost.tsx'
import RouteError from './pages/RouteError.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'blog', element: <Blog />, loader: blogLoader },
      { path: 'blog/:slug', element: <BlogPost />, loader: blogPostLoader },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
