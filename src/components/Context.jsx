import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBd20-keoaKfCl1kcS5uro24RLWYtDkK10",
  authDomain: "reactshop-58ad7.firebaseapp.com",
  projectId: "reactshop-58ad7",
  storageBucket: "reactshop-58ad7.appspot.com",
  messagingSenderId: "1087013179743",
  appId: "1:1087013179743:web:82cfb07fad421eda4a66ea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const cargarData = async () => {
    try {
      const snapshot = await getDocs(productsCollection);
      const arrayDeProductos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProductos(arrayDeProductos);
      console.log(arrayDeProductos); // Verifica que los productos tengan el ID
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    cargarData();
  }, []);

  const agregarAlCarrito = (id) => {
    const carritoAuxiliar = [...carrito];
    const productoAgregar = productos.find(el => el.id === id);
    if (productoAgregar) {
      carritoAuxiliar.push(productoAgregar);
      setCarrito(carritoAuxiliar);
      console.log("agregado correctamente", productoAgregar);
    } else {
      console.error("Producto no encontrado");
    }
  };

  return (
    <AppContext.Provider value={{ productos, carrito, agregarAlCarrito }}>
      {children}
    </AppContext.Provider>
  );
};
