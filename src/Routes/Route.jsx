import React from 'react';
import About from "../Pages/About/About";
import CourseDetails from "../Pages/CourseInformation/CourseDetails";
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
    },
    {
        path: 'coursedetails',
        element: <CourseDetails />,
        isPrivate: false
    }
];

export default routes;