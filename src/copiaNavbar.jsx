<Route path="/" element={<ContainerBody><ItemListContainer productos={productos} carrito={carrito} setCarrito={setCarrito} agregarAlCarrito={agregarAlCarrito} /></ContainerBody> }/>
<Route path="/detalle/:id" element={<ItemDetail productos={productos} />}/>
<Route path="/productos"  element={<ContainerBody><ItemListContainer productos={productos} /></ContainerBody> }/>
<Route path='contacto' element={<ContainerBody><Contacto /></ContainerBody>  }/>
<Route path="/category/:category" element={<ContainerBody><ItemListContainer  productos={productos}/></ContainerBody>} />
<Route path="*" element={<NotFound />} />