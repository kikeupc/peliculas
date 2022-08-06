import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'; 
import IndiceGeneros from './generos/IndiceGeneros';
import Menu from './utils/Menu';
import LandingPage from './LandingPage';
import rutas from './route-config';
import configurarValidaciones from './validaciones';

configurarValidaciones();

function App() { 
  return (
    <>
       <BrowserRouter>
        <Menu/>
        <div className="container">  
        <Switch>
            {rutas.map(ruta => 
            <Route key={ruta.path} path={ruta.path}
               exact={ruta.exact}>
                <ruta.componente/>
                </Route>)}            
        </Switch>
        
           
        
       </div> 
       </BrowserRouter>
    </>
  );
}

export default App;
