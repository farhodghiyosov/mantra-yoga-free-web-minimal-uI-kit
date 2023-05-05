import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MartaHome from './routes/MantraHome'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MartaHome />
  },
  {
    path:'/about',
    element:<div>About</div>
  },
  {
    path:'/world',
    element:<div>World</div>
  },
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
