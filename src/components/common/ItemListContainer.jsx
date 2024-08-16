import React, { useState, useEffect } from "react";
import ItemList from "./Itemlist";
import Loader from "./Loader";


const ItemListContainer = ({ productos , agregarAlCarrito}) => {
   
    // const [displayProducts, setDisplayProducts] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setDisplayProducts(productos); 
    //     }, 900); 
    // }, [productos]); 


    return (
        <>
        {

            productos.length === 0 ? 
            <Loader />
            :
            <>
           <div className="content-card">
            <ItemList productos={productos} agregarAlCarrito={agregarAlCarrito}  />
            </div>
            </>
        }
        </>
    )
};

export default ItemListContainer;



    // if(productos.length===0) {
    //     return (
    //         <p>Cargando...</p>
    //     )
    // } else {
    //     return (
    //         <>
    //                 <div className="content-card">
    //                     <ItemList productos={productos}  />
    //                 </div>
         
    //         </>
    //     );
    // }


