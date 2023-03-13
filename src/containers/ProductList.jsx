import React, {useState, useEffect} from 'react'; //useState, useEffect son los hook a usar
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss'
import axios from 'axios';

const API = 'http://api.escuelajs.co/api/v1/products';

// useEffect es un Hook para hacer peticiones a API y transmitirlos a nuestro componentes
// Docs de la API 👉 https://api.escuelajs.co/docs/  API para desarrollo 👉 https://api.escuelajs.co/api/v1/

const ProductList = () => {
//llamar la info, primero useState para guardar la info que se va a llamar gracias a useEffect
  const [products,  setProducts] = useState([]);

  //useEffect recibe 2 elementos, 1 una funcion anonima(donde se ejecuta el codigo), y el segundo es un arreglo
  //donde se tendra diferentes elementos o valores con los cuales va a estar escuchando sobre un cambio.(en este caso no escucharemos cambios que ocurran)
//mas adelante si se escuchara un cambio que se desencadene por el llamado de una accion de un usuario y con ello actualizar o volver a ejecutar este codigo que estara en la funcion anonima.
/*   useEffect(() => { 
  }, []) */

  /*
  useEffect((async) => { //para las peticiones en necesario instalar axios: npm i axios
    const response = await axios.get(API); //trae la data (clase)=const response = await axios(API);
    setProducts(response.data); //actualiza la data que nos esta trallendo
  }, [])
*/

  useEffect(() => { //para las peticiones en necesario instalar axios: npm i axios
    const getProducts = async () => {
      const response = await axios.get(API); //trae la data (clase)=const response = await axios(API);
      setProducts(response.data); //actualiza la data que nos esta trallendo
      };
      getProducts();
    }, []);


  return (
    <section className="main-container">
      <div className="ProductList">
        {/* Logica para iterar los datos que se traen del API */}
        {/* Se itera por cada producto que tenga products y hacer render de ProductItem  */}
        {products.map(product => (
          <ProductItem key={product.id} />
        ))
        }
      </div>
    </section>
  );
}

export default ProductList
