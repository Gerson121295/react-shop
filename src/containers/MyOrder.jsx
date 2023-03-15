import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '@styles/MyOrder.scss';
import flexita from '@icons/flechita.svg';

const MyOrder = () => {

	const {state:{cart}} = useContext(AppContext);

	//valor reduce: logica de acumular y agregar los valores que necesitamos
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0); //suma de la totalidad del elemento, se le pasa el reducer
		return sum;
	}

  return (
    <aside className="MyOrder">
			<div className="title-container">
				<img src={flexita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{/* Logica para iterar por cada item que se agrega */}
				{/* {cart.map(product => ( //recibe 1 producto
				<OrderItem product={product} key={`orderItem-${product.id}`}/>	 //muestra el producto key tendra cocatenado: orderItem con product.id asi evitar posibles fallas ya que ateriormente se ha usado product id, es mas especifico
				))} */}

				{/* Arregla al eliminar un producto repetido no se elimina los 2 si solo el que tiene el id que es el index */}
				{cart.map((product, index) => ( //recibe 1 producto
				<OrderItem 
					indexValue={index}
					key={index}
					product={product}
				
				/>	 //muestra el producto key tendra cocatenado: orderItem con product.id asi evitar posibles fallas ya que ateriormente se ha usado product id, es mas especifico
				))} 

				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>{/* <p>$560.00</p> */}  {/**Cada vez q se agrega un Item se suma y pasa a sumTotal */}
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
  );
}

export default MyOrder;
