//Layout es un Componente que va recibir un hijo el cual será la parte principal del proyecto

//shortcut: rafc  //importa react y genera un componente

import React, { Children } from 'react'

const Layout = ({children}) => { //llama a children
  return (
  <div className="Layout"> {/* puede tener la estructura base de nuestro proyecto */}
    {children} {/*  recibe un hijo, va a recibir varios componentes y van a vivir aqui de forma ordenada  */}

  </div>
  )
}

export default Layout
