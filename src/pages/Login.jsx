import React, {useRef} from 'react'; //imr //useRef es el hook
import '@styles/Login.scss';
import Logo from '@logos/logo_yard_sale.svg';

const Login = () => { //rafc

  //crear una referencia con un valor
  const form = useRef(null); //pasamos un valor nulo porque no se inicializa con un elemento.

  //funcion para manejar el summit del formulario
  //formData es parte de javaScript y permite instanciar todos los elementos que se encuentran dentro de un formulario y
  //los captura conforme sean llenados, por lo que cuando le demos onSumit los tendra presentes y podremos hacer con ellos lo que querramos.
    //formData encripta la informacion para enviarla al backend

    const handleSummit = (event) => { //recibe un event
      event.preventDefault();//prevenir que no se ejecute esta accion y mande los valores por url si no que en consola o al backend 
      const formData = new FormData(form.current); // form.current - lo que trae de form(formulario login)
      const data ={ //objeto que permite ver la informacion como queremos enviarla al backend
      usename: formData.get('email'), //se pasa el name del jsx(html)
      password: formData.get('password')
      }
      console.log(data); //para mostrar los datos
    }

  return (
        //En Html se usa "className" pero en JS className es una palabra reservada, por lo que se usa  classNameName=. // en html: for en js es htmlFor
    //shorcut: ctrl + D = permite seleccionar todas las palabras iguales 1 por 1
    //shorcut: crtl + shift + l  : permite seleccionar todas las palabras iguales
    //en React todas las etiquetas se cierran, en HTML hay etiquetas que se pueden dejar sin cerrar
 
    <div className="Login">
    <div className="Login-container">
       {/*  <img src={Logo} alt="logo" className="logo" /> */}
       <img src={Logo} alt="logo" className="logo-login" />

       {/* //ubicar el formulario y añadirle la etiqueta ref={form} para acceder a los elementos, se puede trabajar referencia para cada elemento o un solo formulario */}
        <form action="/" className="form" ref={form}>
            <label htmlFor="email" className="label">Email address</label>
            <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" /> {/* //id ya no se refencia como id, ahora es name. id=name */}
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" placeholder="*********" className="input input-password" /> {/* antes: id="password" ahora: name="password" */}
            <button className="primary-button login-button" onClick={handleSummit} >Login In </button> {/* Se agrega un evento para que escuche el clic "onClick" y llame a la funcion handleSummit */}
            <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button> 
    </div>
</div>  

  );
}
export default Login

// el hook useRef permite capturar elementos de formularios como login(capturar usuario y contraseña) para enviarlos al backend;
//En el ejemplo muestra como capturar la informacion y poderla presentar.
//se podria hacer con un onchange para cambiar los valores atraves del input pero en este caso se usa useRef 
//useRef genera una referencia del elemento y  obtiene los elementos atraves de current para luego transmitirlo ya sea al backend o presentarlo

 