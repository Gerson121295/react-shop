import React from 'react'
import '../styles/Header.scss'
import Logo from '../asset/logos/logo_yard_sale.svg';
import IconMenu from '../asset/icons/icon_menu.svg';
import IconShoppingCart from '../asset/icons/icon_shopping_cart.svg';

const Header = () => {
  return (
    <nav>
     {/*  <img src="./icons/icon_menu.svg" alt="menu" className="menu" /> */}
        <img src={IconMenu} alt="menu" className="menu" />
      <div className="navbar-left">
        {/* <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" /> */}
        <img src={Logo} alt="logo" className="logo" />
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
          <li className="navbar-email">platzi@example.com</li>
          <li className="navbar-shopping-cart">
            {/* <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" /> */}
            <img src={IconShoppingCart} alt="shopping cart" />
            <div>2</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header
