import React, { useState } from 'react';
import Breakfast from '../components/Breakfast/Breakfast'

function Order(){

    const menu = [
        {
          id:1,
          name:"Sandwich jamón y queso",
          category: "desayuno",
          price:5, 
          img:"https://cocina-casera.com/wp-content/uploads/2016/11/hamburguesa-queso-receta.jpg",
        },
  
        {
          id:2,
          name:"Agua chica",
          category: "desayuno",
          price:5, 
          img:"https://us.123rf.com/450wm/31moonlight31/31moonlight311612/31moonlight31161200130/67846902-salpicaduras-de-agua-en-colores-azules-alrededor-de-una-botella-de-pl%C3%A1stico-azul-con-agua-mineral-bote.jpg?ver=6"
        }
    ];

    const [food, setFood] = useState(menu);

    return (
        <div>
            <p>Hey! soy la ventana en donde vas a ordenar</p>
            <Breakfast food={food}/>
        </div>
    )
}

export default Order;