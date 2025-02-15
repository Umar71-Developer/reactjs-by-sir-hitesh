import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from "./components/About/About.jsx"
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider,} from "react-router-dom";
import Contact from './components/Contact/Contact.jsx'
//  const router = createBrowserRouter([
//  { path: '/',
//   element: <Layout />,
//   children: [
//     {
//       path: '/',
//       element: <Home />,
//     },
//     {
//       path: 'about',
//       element: <About />,
//     }
//   ]
//  }])
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="user/:userid" element={<User />} />
        <Route 
        loader={githubInfoLoader}
        path="Github" 
        element={<Github />} 
        />
      </Route>
  
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
