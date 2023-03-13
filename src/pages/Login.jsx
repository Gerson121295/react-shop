import React from 'react'; //imr
import '@styles/Login.scss';
import Logo from '@logos/logo_yard_sale.svg';

const Login = () => { //rafc
  return (
        //En Html se usa "className" pero en JS className es una palabra reservada, por lo que se usa  classNameName=. // en html: for en js es htmlFor
    //shorcut: ctrl + D = permite seleccionar todas las palabras iguales 1 por 1
    //shorcut: crtl + shift + l  : permite seleccionar todas las palabras iguales
    //en React todas las etiquetas se cierran, en HTML hay etiquetas que se pueden dejar sin cerrar
 
    <div className="Login">
    <div className="Login-container">
       {/*  <img src={Logo} alt="logo" className="logo" /> */}
       <img src={Logo} alt="logo" className="logo-login" />
        <form action="/" className="form">
            <label htmlFor="email" className="label">Email address</label>
            <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />
            <label htmlFor="password" className="label">Password</label>
            <input type="password" id="password" placeholder="*********" className="input input-password" />
            <input type="submit" value="Log in" className="primary-button login-button" />
            <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
    </div>
</div>  

  );
}
export default Login


