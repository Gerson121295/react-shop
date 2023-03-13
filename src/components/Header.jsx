import React, {useState} from 'react'; //useState es el Hook
/* import '../styles/Header.scss' */
import '@styles/Header.scss'; //ya agregado el alias en webapp.config
import Menu from '@components/Menu';
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
          <li className="navbar-shopping-cart">
            {/* <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" /> */}
            <img src={IconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
      {/* validacion si el estado esta en true muestra el menu de lo contrario, no lo muestra */}
      {toggle  && <Menu /> } {/* si toggle es false no se muestra Menu */}
      
    </nav>
  );
}

export default Header
