import About from "../components/About";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import Projects from "../components/Projects";
import ViewProject from "../components/ViewProject";
export const routes = [
  {
    path: '/',
    element: <Header />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/education',
    element: <About />
  },
  {
    path: '/projects',
    element: <Projects/>
  },
  {
    path: '/view-project/:id',
    element: <ViewProject/>
  },
  
  {
    path: '/*',
    element: <Navigate to='/'/>
  }
];
