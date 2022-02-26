import React from "react";
import { Card } from "react-bootstrap";
import About from "../Pages/About/About";
import Login from "../Pages/Accounts/Login/Login";
import Registration from "../Pages/Accounts/Registration/Registration";
import Cart from "../Pages/Cart/Cart";
import DefaultCart from "../Pages/Cart/DefaultCart";
import CourseDetails from "../Pages/CourseInformation/CourseDetails";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/StudentDashboard/Dashboard";
import SuccessReview from "../Pages/StudentSuccess/SuccessReview";
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
    },
    {
        path: 'student_dashboard',
        element: <Dashboard />,
        isPrivate: false
    },
    {
        path: 'login',
        element: <Login/>,
        isPrivate: false
    },
    {
        path: 'registation',
        element: <Registration/>,
        isPrivate: false
    },
    {
        path: 'successreview',
        element: <SuccessReview />,
        isPrivate: false
    },
    {
        path: 'cart',
        element: <Cart />,
        isPrivate: false
    },
    {
        path: 'your-cart',
        element: <DefaultCart />,
        isPrivate: false
    }
];

export default routes;