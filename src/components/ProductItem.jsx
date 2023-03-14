import React, {useState} from 'react'; //useState es el HOOK
import '@styles/ProductItem.scss';
import BTaddToCard from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => { //() recibimos el producto

//trabajar el estado dentro de React usando HOOK
//const 2 valores 1er es el estado el 2 es una funcion modificadora del 1 elemento del estado, y en useState se pasa el valor inicial de cart(1) puede ir un string '', true, 0, o un objeto {}, o arreglo [] 
const [cart, setCart] = useState([]);// 'hola' reciba un string. - un arreglo para listar multiples elementos que van a estar dentro de la estructura.

//trabajar con el valor de set: modificar el html para que al darle clic desencadene el llamdo 
const handleClick = () => { //esta funcion modifica el estado, es llamada desde el html figure
	/* setCart('Hola Mundo'); */
	setCart([]);
}

  return (
<div className="ProductItem">
			{/* <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}  
			<img src={product.images[0]} alt={product.title} /> {/* imagen desde el API */}
			<div className="product-info">
				<div>
					<p>${product.price}</p> 	{/* <p>$120,00</p> */}
					<p>{product.title}</p>	{/* <p>Bike</p> */}
				</div>
				<figure onClick={handleClick}> {/* onClick para escuchar el clic, llame a la funcion handleClick */}
				<img src={BTaddToCard} alt="" />
				</figure>
				{/* {cart}  llamada de cart */}
			</div>
		</div>
  )
}

export default ProductItem;
