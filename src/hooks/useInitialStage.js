//clic a agregar el carrito se ejecute esta funcion

/* import React, {useState} from 'react' */
import {useState} from 'react';

const initialState ={
    cart: [], //informacion que se necesita
}

const useInitialState = () => {
    const [state, setState] = useState(initialState); //se inicia con el valor que tenga cart: [], de initialState

    //Crear funcion permitir agregar o cambiar valore a este elemento
 /*    const addToCart = (payload)=>{//Normalmente se le llama payload,se pasa un producto y con se puede hacer algo
        setState({
            ...state, //lo que este en el elemento mantenlo
            cart:[...state.cart, payload] //lo que este mantenlo, "(,payload) traelo nuevamente y agregalo a un producto 
        });  */


        const addToCart = (product)=>{//Normalmente se le llama payload,se pasa un producto y con se puede hacer algo
            setState({
                ...state, //lo que este en el elemento mantenlo
                cart:[...state.cart, product] //lo que este mantenlo, "(,payload) traelo nuevamente y agregalo a un producto 
            }); 

    };

    //funcion para remover un producto
/*     const removeFromCart = (payload) => { //elimina uno de los item que concida con el id que tenemos en el carrito.
        setState({
            ...state,  // "...state" lo que este en el estado mantenlo
            cart: state.cart.filter(items => items.id !== payload.id),  //sobre cart quiero hacer un filtro para encontrar el item y eliminarlo
        });
    } */

    const removeFromCart = (indexValue) => { //elimina uno de los item que concida con el id que tenemos en el carrito.
        setState({
            ...state,  // "...state" lo que este en el estado mantenlo
            cart: 
            state.cart.filter((product,index) => index !== indexValue),  //sobre cart quiero hacer un filtro para encontrar el item y eliminarlo
        })
    };

    return{
        state, //conectar el estado, para que lo puedan ver todos
        addToCart,
        removeFromCart
    }
}

export default useInitialState;

