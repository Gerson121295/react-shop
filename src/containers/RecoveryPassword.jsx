import React from 'react';
import '../styles/RecoveryPassword.scss';
//shortcut: rafc //importa react y crea un componente
import logo from '../asset/pictures/logo_yard_sale.svg';

import IconEmail from '../asset/icons/email.svg';

const RecoveryPassword = () => {
  return (
    <div className="login">
    <div className="form-container">
    {/*   <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
        <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Email has been sent!</h1>
      <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

      <div className="email-image">
       {/*  <img src="./icons/email.svg" alt="email" /> */}
       <img src={IconEmail} alt="email" />
      </div>

      <button className="primary-button login-button">Login</button>

      <p className="resend">
        <span>Didn't receive the email?</span>
        <a href="/">Resend</a>
      </p>
    </div>
  </div>
  )
}

export default RecoveryPassword


