import Item from "./Item";


const ItemList = ({productos , agregarAlCarrito}) => {
    return ( 
        productos.map((el)=>{
            return (
                <Item key={el.id} id={el.id} title={el.title} price={el.price} img={el.img} category={el.category} agregarAlCarrito={agregarAlCarrito} />
            )
        })
    )    
}

export default ItemList;