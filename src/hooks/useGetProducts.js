import { useEffect, useState } from "react";
import axios from 'axios';


//custom Hook Esta funcion que estaba en un componente ahora podra pasarse a cualquier componente. Reutilizar la
const useGetProducts = (API) => {

    const [products,  setProducts] = useState([]);
//codigo de la clase -- No funciona con la version 18 actual de React
/*     useEffect(async() => {  
        const response = await axios.get(API); 
        setProducts(response.data); 
        }; []);
        return products;
}; */


//Funciona: Crear otra función asíncrona y luego llamarla DENTRO del bloque del useEffect:

/* 	useEffect(()=>{
		async function fetchData(){
			const response = await axios.get(API);
			setProducts(response.data);
		}		
		fetchData()
	}, [])
    return products; 
*/

    //Funciona: Otra forma: Crear la función fuera del bloque y luego llamarla dentro:
 
async function fetchData(){
    const response = await axios(API);
    setProducts(response.data);
}		

useEffect(()=>{
    fetchData()
}, []) 
return products;

};

export default useGetProducts;