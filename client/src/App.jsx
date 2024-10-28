import React from "react";
import './App.css'
import pingu from './components/images/pingu.jpg'




function App(){
    return(
        <>
        <div className="containerHeader">
                <h2>Nomades Digital</h2>
                <img className="imagePingu" src={pingu} alt="Imagem de um Pinguin" />
        </div>
        </>
    )
}

export default App