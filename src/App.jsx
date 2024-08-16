import { useState, useEffect } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Contacto from './components/common/Contacto'
import ContainerBody from './components/layouts/ContainerBody'
import ItemListContainer from './components/common/ItemListContainer'
import fetchData from '../fetchData'
import NotFound from './components/layouts/NotFound'
import ItemDetail from './components/common/ItemDetail'


function App() {

  const [productos, setProductos] = useState([])
  const [carrito,setCarrito] = useState([])

  useEffect(() => {
    fetchData()
    .then((response) => {
      setProductos(response);
    })
  },[])

function agregarAlCarrito(productos) {

  const carritoAuxiliar = [...carrito]
  carritoAuxiliar.push(productos)
  setCarrito(carritoAuxiliar)
  console.log("agregado correctamente", productos)
}
 

  return (
    <>
   
   <BrowserRouter basename='react-shop/'>
   <Navbar />
    <Routes>
      <Route path="/" element={<ContainerBody><ItemListContainer productos={productos} carrito={carrito} setCarrito={setCarrito} agregarAlCarrito={agregarAlCarrito} /></ContainerBody> }/>
      <Route path="/detalle/:id" element={<ItemDetail productos={productos} />}/>
      <Route path="/productos"  element={<ContainerBody><ItemListContainer productos={productos} /></ContainerBody> }/>
      <Route path='contacto' element={<ContainerBody><Contacto /></ContainerBody>  }/>
      <Route path="/category/:category" element={<ContainerBody><ItemListContainer  productos={productos}/></ContainerBody>} />
      <Route path="*" element={<NotFound />} />
    </Routes>

   </BrowserRouter>

   <Footer />
  
    </>

  
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React from "react";

// const App = () => {
//   const user = {
//     name: 'Jhon Doe',
//     email: 'jhondoe@gmail.com',
//     ProfilePic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',
//     isLoggedIn: true
//   }
// // userInfo va a tener dentro avatar que tiene la imagen de ProfilePic
//   return (
//     <div>
//       <Nav username={user.name} isLoggedIn={user.isLoggedIn} email={user.email}/>
//       <UserInfo user={user} />
//       <Footer ProfilePic={user.ProfilePic} /> 
//     </div>
//   )
// }

export default App;

// const UserInfo = (props) => {

//   const {user} = props;

//   // USER INFO cuerpo del card

//   return (
//     <div className="user-info">
//       <h2>Informacion de usuario</h2>
//       <p>Nombre: {user.name} <Avatar img={user.ProfilePic} /></p>
//       <p>Email: {user.email}</p>
//     </div>
//   )
//   // cuerpo del card 
// }

//   const Nav =(props) => {

//     const {isLoggedIn,username,email} = props

//     if(isLoggedIn)
//     return (
//       <nav>
//         <button>{username} Logout {email}</button>
//       </nav>
//       )

//       return (
//         <nav>
//           <button>Loging</button>
//         </nav>
//       )
//   }

//   const Avatar = (props) => {
//     const {img} = props;
//     return <img className="avatar" src={img} alt="user avatar" />
//   };

//   const Footer = (props) => {
//     const {ProfilePic} = props
//     return (
//       <footer>
//           <img src={ProfilePic} alt="Imagen avatar" />
//       </footer>
//     )
//   };





// import React, { createContext, useContext, useState } from 'react';

// const UserContext = createContext();

// const useUserContext = () => useContext(UserContext);

// const ContextProvider = (props) => {
//   const user = {
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     profilePic:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',
//     isLoggedIn: true,
//   };

//   const [usuario, setUsuario] = useState(user);
  
//   const otroUser = {
//     name: 'Juan Pérez',
//     email: 'juanperez@example.com',
//     profilePic:
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',
//     isLoggedIn: false,
//   }

//   return (
//     <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
//   );
// };

// const App = () => {
  
//   return (
//     <div>
//       <ContextProvider>
//         <Nav />
//         <UserInfo />
//         <Footer />
//       </ContextProvider>
//     </div>
//   );
// };

// export default App;

// const UserInfo = () => {

//   const user = useUserContext();

//   return (
//     <div className="user-info">
//       <h2>Información del usuario:</h2>
//       <p>
//         Nombre: {user.name} <Avatar />
//       </p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

//   const Avatar = () => {
//     const { profilePic } = useUserContext();
//     return <img className="avatar" src={profilePic} alt="user avatar" />;
//   };

//   const Footer = () => {
//     return (
//       <footer>
//         <small>
//           <p>2023 ©Coderhouse all rights reserved</p>
//           <a href="#">
//             <Avatar />
//             Go to dashboard
//           </a>
//         </small>
//       </footer>
//     );
//   };

//   const Nav = () => {
//     const { isLoggedIn, name } = useUserContext();

//     const handleLogin = () => {
//       isLoggedIn= false
//     }

//     if (isLoggedIn)
//       return (
//         <nav>
//           <button onClick={() => handleLogin()}>{name} Logout</button>
//         </nav>
//       );

//     return (
//       <nav>
//         <button onClick={() => handleLogin()}>Login</button>
//       </nav>
//     );
//   };




