import { useAppContext } from "../Context";
import Item from "./Item";

const ItemListContainer = () => {
  const { productos } = useAppContext();

  return (
    <div className="item-list-container">
      {productos.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        productos.map(producto => (
          <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            img={producto.img}
            category={producto.category}
          />
        ))
      )}
    </div>
  );
};

export default ItemListContainer;
