import React, { useState } from "react";

/* // componentes que tiene estados statefull, 
se podria cambiar el valor name con setName o podria transmitir
a otro componente o un  hijo sea el encargado de cambiar el nombre estado */
const Button = () =>{
    const [name, setName] = useState('Hola Mundo');

    return(
        <div>
           {/*  <h1> Hello world</h1> */} {/*  no tiene sentido es lo mismo que la linea siguiente. */}
           <h1>{name}</h1>
        </div>
    );
}

//Componente Stateless no tiene estados solo para presentacion una parte visual solo puede pasar props
const Button1 = ({text})=> <ButtonRed text={text} />;

//otra forma

const Button2 = () => (
    <div> <h1>{name}</h1></div>
)



//Componentes de clase class

//una forma de añadir el component
/* import React from 'react'
class App extends React.Component { */

//otra forma de añadir el component
import React, {Component} from 'react'

class App extends Component { 
   
    constructor(){  //ya no se usa este tipo de componentes
        super();
        this.state={
            count:0
        };
    }
 
  render() {//da la estructura de lo que va a presentar nuestra App
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}



// component HOOK
import React, {Component} from 'react'

function ComponentWrapperComponent(WrapperComponent){

    //puede ver logica de un estado, como interactuo con el elemento
    
    class Wrapper extends Component{
        render(){
            return <WrapperComponent {... this.props} />;
        }
    }

    return Wrapper;
}


