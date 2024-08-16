import { Link } from "react-router-dom";




const Item = ({title,price,id,img,category, agregarAlCarrito}) => {
    return (
        <div className="card" key={id}>
            <h2>{title}</h2>
            <img src={img} />
            <h3>{price}</h3>
            <h5>{category}</h5>
            <Link to={`/detalle/${id}`}>
                <button className="btn-view">Ver detalles</button>
            </Link> 
            <button className="btn-addCart" onClick={()=> agregarAlCarrito(title)}>Agregar al carrito</button>

        </div>
    )
}

export default Item;