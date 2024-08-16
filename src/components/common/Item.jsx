import { Link } from "react-router-dom";
import { useAppContext } from "../Context";

const Item = ({ title, price, id, img, category }) => {
  const { agregarAlCarrito } = useAppContext();

  return (
    
    <div key={id} className="card">
      <h2>{title}</h2>
      <img src={img} alt={title} />
      <h3>{price}</h3>
      <h5>{category}</h5>
      <Link to={`/detalle/${id}`}>
        <button className="btn-view">Ver detalles</button>
      </Link>
      <button className="btn-addCart" onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button>
    </div>
  );
};

export default Item;
