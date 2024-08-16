import Item from "./Item";


const ItemList = ({productos}) => {    
    return ( 
        productos.map((el) => {
            return (
          
                <Item key={el.id} id={el.id} title={el.title} price={el.price} />
               
              
            )
        })
    )    
}

export default ItemList;