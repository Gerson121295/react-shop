import React from 'react'

const AppContext = React.createContext({}); //pasa un objeto vacio


export default AppContext;

/*
22-React context. Context permite conectar toda nuestra app por medio de contexto no importa donde se encuentra el componente podra acceder a un estado.
Redux se enfoca en el flujo de la informacion de la app, Context provee la informacion para que pueda ser accesible desde cualquier componente sin 
necesidad de estarla pasando por todos los elemento o componentes que tengan hijos.
 */