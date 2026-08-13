import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import Shop from './pages/Store/Shop';
import Cart from './pages/Cart/Cart';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path='shop' element={<Shop />} />
               <Route path='cart' element={<Cart />} />
            </Route>

            <Route path='*' element={<NotFound />} />
         </Routes>
      </>
   );
};

export default App;
