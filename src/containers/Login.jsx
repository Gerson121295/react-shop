import React from 'react'; //imr

const Login = () => { //rafc
  return (
    //En Html se usa "class" pero en JS class es una palabra reservada, por lo que se usa "className". // en html: for en js es htmlFor
    //shorcut: ctrl + D = permite seleccionar todas las palabras iguales 1 por 1
    //shorcut: crtl + shift + l  : permite seleccionar todas las palabras iguales
    //en React todas las etiquetas se cierran, en HTML hay etiquetas que se pueden dejar sin cerrar
   <div className="login">
    <div className="form-container">
      <img src="./logos/logo_yard_sale.svg" alt="logo" 
            className="logo" />

      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new passwrd for your account</p>

      <form action="/" className="form">
        <label htmlFor="password" className="label">Password</label>
        <input  type="password" id="password" 
                placeholder="*********" className="input input-password" />

        <label htmlFor="new-password" className="label">Password</label>
        <input  type="password" id="new-password" 
                placeholder="*********" className="input input-password" />

        <input  type="submit" value="Confirm" 
                className="primary-button login-button" />
      </form>
    </div>
    </div>
  )
}

export default Login


