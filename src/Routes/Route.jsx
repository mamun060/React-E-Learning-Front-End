import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import AllCourse from './../Pages/AllCourse/AllCourse';

const routes = [
    {
        path: '/',
        element: <Home />,
        isPrivate: false
    },
    {
        path: '/about',
        element: <About />,
        isPrivate: false
    
    },
    {
        path: 'all_course',
        element: <AllCourse />,
        isPrivate: false
    }
];

export default routes;