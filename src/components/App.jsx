
  // *******  App es el archivo principal *******

  //rafce --importa react y crea el componente //imr importa react
import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
  return (
   <Layout> {/* van a vivir los hijos de Layout */}
    <Login /> {/* esta definida solo para presentar <Login />  (puede tener 2 etiqueta "<Login></Login>" y dentro puede estar 1 hijo), Layout tiene 2 etiqueta una que habre y otra que cierra debido a que tiene hijos */}
    </Layout>
  );
}

export default App





