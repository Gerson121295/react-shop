import React from 'react';
/* import '../styles/Order.scss'; */
import '@styles/Order.scss';
/*  import flexita from '../asset/icons/flechita.svg';  */

import flexita from '@icons/flechita.svg'; 

const Order = () => {
  return (
<div className="Order">
			<p>
				<span>03.25.21</span>
				<span>6 articles</span>
			</p>
			<p>$560.00</p>
			<img src={flexita} alt="arrow" />
		</div>
  )
}

export default Order
