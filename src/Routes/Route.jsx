import React from "react";
import About from "../Pages/About/About";
import ForgotPassword from "../Pages/Accounts/ForgotPassword/ForgotPassword";
import Login from "../Pages/Accounts/Login/Login";
import Registration from "../Pages/Accounts/Registration";
import Cart from "../Pages/Cart/Cart";
import DefaultCart from "../Pages/Cart/DefaultCart";
import CourseDetails from "../Pages/CourseInformation/CourseDetails";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Search from "../Pages/Search/Search";
import Dashboard from "../Pages/StudentDashboard/Dashboard";
import SuccessReview from "../Pages/StudentSuccess/SuccessReview";
import AllCourse from './../Pages/AllCourse/AllCourse';
import Checkout from './../Pages/Checkout/Checkout';
import allowedRoles from "./../Utilities/Roles";

const routes = [
    {
        path: '/',
        element: <Home />,
        isPrivate: false
    },
    {
        path: 'about',
        element: <About />,
        isPrivate: false
    },
    {
        path: 'all-course',
        element: <AllCourse />,
        isPrivate: false
    },
    {
        path: 'coursedetails/:id',
        element: <CourseDetails />,
        isPrivate: false
    },
    {
        path: 'student-dashboard',
        element: <Dashboard />,
        isPrivate: true,
        allowedRoles
    },
    {
        path: 'register',
        element: <Registration/>,
        isPrivate: false,
        isProtected: true,
    },
    {
        path: 'login',
        element: <Login/>,
        isPrivate: false,
        isProtected: true,
    },
    {
        path: 'forgot-password',
        element: <ForgotPassword/>,
        isPrivate: false,
        isProtected: true,
    },
    {
        path: 'success-review',
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
    },
    {
        path: 'checkout',
        element: <Checkout />,
        isPrivate: false
    },
    {
        path: '*',
        element: <NotFound />
    },
    {
        path: 'search-result',
        element: <Search />,
        isPrivate: false
    }
];

export default routes;