import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import flexita from '@icons/flechita.svg';

const MyOrder = () => {

	const {state:{cart}} = useContext(AppContext);


  return (
    <aside className="MyOrder">
			<div className="title-container">
				<img src={flexita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{/* Logica para iterar por cada item que se agrega */}
				{cart.map(product => ( //recibe 1 producto
				<OrderItem product={product} key={`orderItem-${product.id}`}/>	 //muestra el producto key tendra cocatenado: orderItem con product.id asi evitar posibles fallas ya que ateriormente se ha usado product id, es mas especifico

				))}

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
  );
}

export default MyOrder;
