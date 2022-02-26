import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Assets/css/Partials/Responsive.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "video-react/dist/video-react.css";
import routes from './Routes/Route';
import { ProtectedRoute, PrivateRoute } from './Routes/AuthenticableRoutes';


function App() {
  return (
    <div className="App">
      <Routes> 
        {
          routes.map((route,index) => {
            const { path, element, isPrivate, isProtected, allowedRoles} = route;
            return isPrivate ? 
            (
              <Route key={index} element={<PrivateRoute allowedRoles={allowedRoles}/>}>
                <Route key={index} path={path} element={element} />
              </Route>
            ) : 
            (
                isProtected ? (
                  <Route key={index} element={<ProtectedRoute />}>
                    <Route key={index} path={path} element={element} />
                  </Route>
                ): (
                  <Route key={index} path={path} element={element} />
                )
            );

          })
        }
      </Routes> 
    </div>
  );
}

export default App;
