import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate= useNavigate();
  const location= useLocation();
  const path    = location.pathname;
  const redirectableRoutes = ['forgot-password', 'login', 'register', 'student-dashboard'];

  useEffect(()=>{

    const isMatch    = redirectableRoutes.join('|');
    const pattern    = new RegExp(isMatch, "im"); 
    const matchPaths = path.match(pattern);

    if (matchPaths && matchPaths.length)
    {
      navigate(matchPaths[0]);
    }

  },[]);

  return (
    <div>NotFound</div>
  )
}

export default NotFound