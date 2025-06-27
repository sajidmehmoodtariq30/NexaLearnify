// Public routes configuration
import Home from '../pages/public/Home';
import About from '../pages/public/About';
import Contact from '../pages/public/Contact';
import Academics from '../pages/public/Academics';
import Courses from '../pages/public/Courses';
import Login from '../pages/public/Login';
import Register from '../pages/public/Register';

export const publicRoutes = [
  { path: '/', element: 'redirect', to: '/home' },
  { path: '/home', element: <Home />, title: 'Home' },
  { path: '/about', element: <About />, title: 'About' },
  { path: '/contact', element: <Contact />, title: 'Contact' },
  { path: '/academics', element: <Academics />, title: 'Academics' },
  { path: '/courses', element: <Courses />, title: 'Courses' },
  { path: '/login', element: <Login />, title: 'Login' },
  { path: '/register', element: <Register />, title: 'Register' }
];

export default publicRoutes;
