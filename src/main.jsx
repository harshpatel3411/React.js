import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'


// METHOD-1 (TO DO ROUTING)
// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Layout />,
//       children: [
//         {
//           path: '',
//           element: <Home />
//         },
//         {
//           path: 'about',
//           element: <About />
//         },
//         {
//           path: 'contact',
//           element: <Contact />
//         },
//         {
//           path: 'github',
//           element: <Github />

//         }
//       ]
//     }
//   ]
// )


//METHOD-2(TO DO ROUTING)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route
        loader={
          githubInfoLoader
           //here you can aslo write you whole fetching function

          //Concept of loader:-loader ek aevu vastu ke ke jyare hu koi perticular vastu par arrow lai jau tyare ae automatically
          //                    data fetching and bijo koi task perform karvanu start kari de che , and badho data cashe memmory ma rakhe che

          //Note imp - yaad rakhje aa loader Github component mate use thayu che atle je pan value loader return karse te value leva mate me useLoaderData()
          //karyu che Githu.jsx ni andar je value store karse je pan return thai hase 

        }
        path="github"
        element={<Github />}
      />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
