import React, {useState, useContext} from 'react'; //useState y useContext son Hooks 
/* import '../styles/Header.scss' */
import '@styles/Header.scss'; //ya agregado el alias en webapp.config
import Menu from '@components/Menu';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';
/* import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg'; */
/* import IconShoppingCart from '../asset/icons/icon_shopping_cart.svg'; */
//estas variables debido a que se agrego el alias de la ruta icons y logos en webpack.config

import IconMenu from '@icons/icon_menu.svg';
import logo from  '@logos/logo_yard_sale.svg';
import  IconShoppingCart from  '@icons/icon_shopping_cart.svg' 
/* const IconShoppingCart = '@icons/icon_shopping_cart.svg' */ /* const solo es para url o una constante */

const Header = () => {

  const [toggle, setToggle] = useState(false); //const tiene 2 valores el 1er.valor que tiene el estado, 2valor modificar al 1er valor y useState es el valor inical o inicaliza el 1er.valor, tiene false para que no se visualise el menu. toggle es un nombre pero JS activa o desactiva al dar clic
  const [toggleOrders, setToggleOrders] = useState(false); //my orders para mostrar el menu
  /*  const {state} = useContext(AppContext); */// para conectar la App con useContext
  const {state:{cart}} = useContext(AppContext); // para conectar la App con useContext se agrega cart para que en llamada no se agregue state.cart.length sino solo cart.length

  const handleToggle =()=>{
    setToggle(!toggle); //al dar clic llama a la funcion handleToggle y cambia el valor que tenia toggle
  }

  return (
    <nav>
     {/*  <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
        <img src={IconMenu} alt="menu" className="menu-icon" />
      <div className="navbar-left">
        {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
           <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>platzi@example.com</li>
          <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)} > {/* al dar clic llama la funcion setToggleOrders, pero para no hacer una funcion, se pasa la logica alli mismo, para que cambie el valor si esta false al dar clic pase true y viceversa */} 
            {/* <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" /> */}
            <img src={IconShoppingCart} alt="shopping cart" />
           {/*  <div>2</div> */}
           {/* Conecta el estado con la app, lo que haga en productItem se vera reflejado en este componente  */}
           {/* {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }  */}{/* si en cart hay mas de 0 elementos, "?" entonces presentar el valor, ":" sino presentar nulo */}
          {/*carrito se vea un “+9” cuando agregan más de 9 elementos, 
             { state.cart.length > 0 && <div>{ state.cart.length > 9 ? '+9' : state.cart.length }</div> }
          */}
            {cart.length > 0 ? <div>{cart.length}</div> : null }  {/* antes: state.cart.length ahora: cart.length*/}
          
          </li>
        </ul>
      </div>
      {/* validacion si el estado esta en true muestra el menu de lo contrario, no lo muestra */}
      {toggle  && <Menu /> } {/* si toggle es false no se muestra Menu */}
      {toggleOrders && <MyOrder />} {/* si toggle es false no se muestra MyOrders*/}
    </nav>
  );
}

export default Header
