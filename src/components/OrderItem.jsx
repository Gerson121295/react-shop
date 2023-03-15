import React, { useContext } from 'react'; 
/* import '../styles/OrderItem.scss'; */
/* import IconClose from '../asset/icons/icon_close.png'; */
import AppContext from '../context/AppContext';
import '@styles/OrderItem.scss';
import IconClose from '@icons/icon_close.png';

// Codigo de la clase
/* const OrderItem = ({product}) => {
	const {removeFromCart} = useContext(AppContext);
	const handleRemove = product =>{
		removeFromCart(product);
	} */

/* 	const OrderItem = (props) => {
		const {product, indexValue} = props
		const {removeFromCart} = useContext(AppContext);

		const handleRemove = (index) => {
			removeFromCart(index)
		} */

	 	const OrderItem = (props) => {
		const {product, indexValue} = props
		const {removeFromCart} = React.useContext(AppContext);

		const handleRemove = (index) => {
			removeFromCart(index)
		} 

  return (
<div className="OrderItem">
			<figure> 
				{/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike" /> */}
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>{/* <p>Bike</p> */}
			<p>{product.price}</p>{/* <p>$30,00</p> */}
		{/* 	<img src={IconClose} alt="close" onClick={() => handleRemove(product)} /> */}
		<img src={IconClose} alt="close" onClick={() => handleRemove(indexValue)} /> {/* hí le estamos pasando un indexValue unico del vector que se esta creando en addToCart a handleRemove. */}
		</div>
  );
}

export default OrderItem;
