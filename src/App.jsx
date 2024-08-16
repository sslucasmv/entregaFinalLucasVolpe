import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/common/ItemListContainer';
import NotFound from './components/layouts/NotFound';
import ItemDetail from './components/common/ItemDetail';
import { ContextProvider } from './components/Context';
import ContainerBody from './components/layouts/ContainerBody';

function App() {
  return (
    <>
      <BrowserRouter basename='/react-shop'>
        <ContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ContainerBody><ItemListContainer /></ContainerBody>} />
            <Route path="/detalle/:id" element={<ContainerBody><ItemDetail /></ContainerBody>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
