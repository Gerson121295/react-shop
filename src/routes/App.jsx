
  // *******  App es el archivo principal *******

  //rafce --importa react y crea el componente //imr importa react
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Routes = Switch
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
//import RecoveryPassword from '../containers/RecoveryPassword';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialStage'; //para el contexto

import '@styles/global.css';

const App = () => {

  const initialState = useInitialState(); /* initialState = al custom hook, todo lo que retorna el contexto useInitialState, todo ese recurso se comparte al provider*/

  return (

    /* Para poder proveer del contexto se utiliza el método provider del componente que hemos creado con el contexto (AppContext) */
    <AppContext.Provider value={initialState}> 

    <BrowserRouter basename='/reactShop'>
      <Layout> {/* van a vivir los hijos de Layout */}
        <Routes> {/* Switch */}       
          <Route exact path="/" element={ <Home /> } /> 
          <Route exact path="/login" element={ <Login /> } />  {/* esta definida solo para presentar <Login />  (puede tener 2 etiqueta "<Login></Login>" y dentro puede estar 1 hijo), Layout tiene 2 etiqueta una que habre y otra que cierra debido a que tiene hijos */}
          <Route exact path="/password-recovery" element={ <PasswordRecovery /> } /> {/* element=component */}         
          <Route exact path="/send-email" element={<SendEmail /> } /> 
          <Route exact path="/new-password" element={<NewPassword /> } /> 
          <Route exact path="/account" element={<MyAccount />  } /> 
          <Route exact path="/signup" element={<CreateAccount />  } /> 
          <Route exact path="/checkout" element={<Checkout />} /> 
          <Route exact path="/orders" element={<Orders />} /> 
          <Route path="*" element={ <NotFound /> } />         
        </Routes>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>

  );
}
export default App





