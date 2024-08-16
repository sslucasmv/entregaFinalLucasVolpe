import { useState, useEffect } from 'react'
import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import LandinPage from './components/common/LandinPage'
import Nosotros from './components/common/Nosotros'
import Contacto from './components/common/Contacto'
import ContainerBody from './components/layouts/ContainerBody'
import FetchData from '../fetchData'
import ItemListContainer from './components/common/ItemListContainer'

function Loading() {


const [data,setData] = useState({stataus:"cargando"})


const [loading, setLoading] = useState(true)

/*
useEffect(() => {
  FetchData()
  .then(response => {
    setData(response);
  });
},[])
*/

useEffect(() => {

  console.log("Cambiaste loading")

},[loading])

  return (
    <>
    
    <div>
      <h1>Status: {loading ? "TRUE" : "FALSE"}</h1>
      <button onClick={() => setLoading(!loading)}>Click!</button>
    </div>
    
    {/*Status: {data.status}*/}
    
    </>
  )
}


function App() {
 

  return (
    <>
   <BrowserRouter basename='/react-shop/'>
   <Navbar />
    <Routes>
      <Route path="/" element={<ContainerBody><LandinPage /></ContainerBody> }/>
      <Route path="/nosotros" element={<ContainerBody><Nosotros /></ContainerBody> }/>
      <Route path='/contacto' element={<ContainerBody><Contacto /></ContainerBody>  }/>
    </Routes>
   
   </BrowserRouter>
   <Loading />
   <ItemListContainer />
  
   <Footer />
    </>
  )
}

export default App
