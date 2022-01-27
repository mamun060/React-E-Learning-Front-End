import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

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
    
    }
];

export default routes;