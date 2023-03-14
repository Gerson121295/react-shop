//clic a agregar el carrito se ejecute esta funcion

import React,{useState} from 'react'
const initialState ={
    cart: [], //informacion que se necesita
}

const useInitialState = () => {
    const [state, setState] = useState(initialState); //se inicia con el valor que tenga cart: [], de initialState

    //Crear funcion permitir agregar o cambiar valore a este elemento
    const addToCart = (payload)=>{//Normalmente se le llama payload,se pasa un producto y con se puede hacer algo
        setState({
            ...state, //lo que este en el elemento mantenlo
            cart:[...state.cart, payload] //lo que este mantenlo, "(,payload) traelo nuevamente y agregalo a un producto 
        });
    };
    return{
        state, //conectar el estado, para que lo puedan ver todos
        addToCart
    }
}

export default useInitialState;

