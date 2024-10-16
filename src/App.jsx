import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {routes} from './utils/AppRouter'
function App() {
let router = createBrowserRouter(routes)
return <>
  <RouterProvider router={router}/>
  </>
}

export default App
