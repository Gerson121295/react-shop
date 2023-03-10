
  // *******  App es el archivo principal *******

  //rafce --importa react y crea el componente //imr importa react
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Routes = Switch
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout> {/* van a vivir los hijos de Layout */}
        <Routes> {/* Switch */}       
          <Route exact path="/" element={ <Home /> } /> 
          <Route exact path="/login" element={ <Login /> } />  {/* esta definida solo para presentar <Login />  (puede tener 2 etiqueta "<Login></Login>" y dentro puede estar 1 hijo), Layout tiene 2 etiqueta una que habre y otra que cierra debido a que tiene hijos */}
          <Route exact path="/recovery-password" element={ <RecoveryPassword /> } /> {/* element=component */}
          <Route path="*" element={ <NotFound /> } />         
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App





