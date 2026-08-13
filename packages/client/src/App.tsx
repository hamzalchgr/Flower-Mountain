import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import Home from './pages/Home/Home';
import ProductCard from './components/Product/ProductCard';
import CartItem from './components/Cart/CartItem';
import Spinner from './components/UI/Spinner';

export type Product = {
   id: string,
   title: string,
   price: number,
   sale?: {
      onSale: boolean,
      discount: number
   },
   collection: 'men' | 'women' | 'kids' | 'accessories',
   sku: string,
   description: string[],
   images: string[],
   color: string,
}

const product: Product = {
   id: '23935db8-64fa-4ba0-9c17-9e12322b083e',
   title: 'Mid Century Coffee Table',
   price: 220,
   sale: {
      onSale: true,
      discount: 14
   },
   collection: 'men',
   sku: 'GS-201006',
   description: [
         "Classic mid-century inspired design",
         "Spacious tabletop for décor and essentials",
         "Sturdy construction for durability and stability"
      ],
   images: [
      'https://www.flowermountain.com/thumbnail/71/e5/96/1770451432/fal0012019510051m51-1_1920x1920.jpg?ts=1770451433',
      'https://www.flowermountain.com/thumbnail/44/ff/bc/1772617540/g_a746df8a51f2dc637618a2498bc0cf71a3891d5c_1920x1920.jpg?ts=1772617544',
      'https://shop.gessato.com/wp-content/uploads/2024/01/brutus-lounge-chair-coffee-7-1000x1000.jpg',
      'https://shop.gessato.com/wp-content/uploads/2024/01/brutus-lounge-chair-coffee-6-1000x1000.jpg',
      'https://shop.gessato.com/wp-content/uploads/2024/01/brutus-lounge-chair-coffee-5-1600x1600.jpg',
      'https://shop.gessato.com/wp-content/uploads/2024/01/brutus-lounge-chair-coffee-3-1000x1000.jpg',
   ],
   color: 'White Grey Light blue'
};




export type CartItemProps = {
   id: string;
   title: string;
   price: number;
   collection: string;
   sale?: {
      onSale: boolean,
      discount: number
   }
   image: string;
   color: string,
   quantity: number;
   size: number
};

const cartItem: CartItemProps = {
   id: '23935db8-64fa-4ba0-9c17-9e12322b083e',
   title: 'YAMABUSHI WOMAN',
   price: 220,
   collection: 'women',
   sale: {
      onSale: true,
      discount: 14
   },
   image: 'https://www.flowermountain.com/thumbnail/71/e5/96/1770451432/fal0012019510051m51-1_1920x1920.jpg?ts=1770451433',
   color: 'White Grey Light blue',
   quantity: 1,
   size: 40,
}

const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
            </Route>
         </Routes>
      </>
   );
};

export default App;
