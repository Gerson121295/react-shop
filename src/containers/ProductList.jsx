import React from 'react'; // import React, {useState, useEffect} from 'react'; //useState, useEffect son los hook a usar
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts'; // import del hook-  custom hook
import '@styles/ProductList.scss'
/* import axios from 'axios'; */ // parte del hook

 const API = 'http://api.escuelajs.co/api/v1/products';  //parte del hook 

// useEffect es un Hook para hacer peticiones a API y transmitirlos a nuestro componentes
// Docs de la API 👉 https://api.escuelajs.co/docs/  API para desarrollo 👉 https://api.escuelajs.co/api/v1/

/* const ProductList = () => { //parte del hook 
//llamar la info, primero useState para guardar la info que se va a llamar gracias a useEffect
  const [products,  setProducts] = useState([]); */ //parte del hook

  //useEffect recibe 2 elementos, 1 una funcion anonima(donde se ejecuta el codigo), y el segundo es un arreglo
  //donde se tendra diferentes elementos o valores con los cuales va a estar escuchando sobre un cambio.(en este caso no escucharemos cambios que ocurran)
//mas adelante si se escuchara un cambio que se desencadene por el llamado de una accion de un usuario y con ello actualizar o volver a ejecutar este codigo que estara en la funcion anonima.
/*   useEffect(() => { }, []) */

  //try{  //comentario
  //----------parte del hook ----------------
 /*  useEffect(() => { //para las peticiones en necesario instalar axios: npm i axios  
      const getProducts = async () => {
      const response = await axios.get(API); //trae la data (clase)=const response = await axios(API);
      setProducts(response.data); //actualiza la data que nos esta trallendo
      };
      getProducts();
    }, []); */
     /*    } catch (err){  //comentario
          console.log('Error: ', err); //comentario
        } */
///--------------------------------

//--codigo de llamada del hook para traer los productos de la API  --- Custom Hook: organizar los hook e una carpeta para luego llamarlos en el componente
        const ProductList = () =>{
          const products = useGetProducts(API);

        

  return (
    <section className="main-container">
      <div className="ProductList">

        {/*---- //parte del hook de ejemplo */}
        {/* Logica para iterar los datos que se traen del API */}
        {/* Se itera por cada producto que tenga products y hacer render de ProductItem  */}
      
      {/*   {products.map(product => (
          <ProductItem key={product.id} />
        ))}  */}
       {/* ---------------------------------------- */}

        {/* LLamada del hook */}
        {products.map(product => (
          <ProductItem product={product} key={product.id} />
        ))} 

      </div>
    </section>
  );
      }

export default ProductList 
// Propuesta dentro del uso de React Hook en las app es separar logica que se va a reutilizar en cusmo Hooks
//custom hooks permitiran hacer ciertas interacciones llamados o efectos que se quiera transmitir a los componentes
//y que vamos a reutilizar por lo tanto  podemos separar en una logica y le vamos a llamar custom Hooks y asi
//lo vamos a integrar a nuestros componentes y se va a poder utilizar cuantas veces queramos.
