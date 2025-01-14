import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Componentes/Home/Home.jsx'
import About from './Componentes/About/About.jsx'
import Contact from './Componentes/Contact/Contact.jsx'
import User from './Componentes/User/User.jsx'
import Github, { githubInfoLoader } from './Componentes/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//     ]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>

    <Route path='' element={<Home />} />
    <Route path='about/' element={<About />} >
      <Route path='priyal'/>
    </Route>
    <Route path='contact' element={<Contact />} />
    <Route path='user/:userid' element={<User />} />
    <Route loader={githubInfoLoader} path='github' element={<Github />} />
  </Route>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
