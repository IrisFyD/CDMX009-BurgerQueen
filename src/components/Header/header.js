import React from 'react';
import logo from '../../assets/logo-rocky.png'
import StyleHeader from './StyleHeader.css'

function Header (){
    return (
        <div className={StyleHeader}> 
            <nav>
                <button>Ordenar</button>
                <button>Producción</button>
                <button>Finalizadas</button>
            </nav>
            <div>
                <img alt="logo" src={logo}/>
            </div>
        </div>
    )
}

export default Header;