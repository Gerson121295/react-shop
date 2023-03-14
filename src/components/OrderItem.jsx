import React from 'react'; 
/* import '../styles/OrderItem.scss'; */
/* import IconClose from '../asset/icons/icon_close.png'; */

import '@styles/OrderItem.scss';
import IconClose from '@icons/icon_close.png';

const OrderItem = ({product}) => {

  return (
<div className="OrderItem">
			<figure> 
				{/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" /> */}
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>{/* <p>Bike</p> */}
			<p>{product.price}</p>{/* <p>$30,00</p> */}
			<img src={IconClose} alt="close" />
		</div>
  );
}

export default OrderItem;
