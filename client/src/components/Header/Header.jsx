import React from "react";

import '../Header/Header.css'

import pingu from '../images/pingu.jpg'

function Header(){
    return(
        <>
        <div className="containerHeader">
                <h2>Nomades Digital</h2>
                <img className="imagePingu" src={pingu} alt="Imagem de um Pinguin" />
        </div>
        </>
    )
}

export default Header