import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Assets/css/Partials/Responsive.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import routes from './Routes/Route';

function App() {
  return (
    <div className="App">
      <Routes> 
        {
          routes.map((route,index) => {
            const {path, element, isPrivate} = route;
            return ( isPrivate ? '' : <Route key={index} path={path} element={element} />);
          })
        }
      </Routes> 
    </div>
  );
}

export default App;
