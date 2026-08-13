import { Minus, Plus, Trash2 } from 'lucide-react';
import Button from '../UI/Button';
import { formatPrice } from '../../utils/formatPrice';
import { Link } from 'react-router-dom';
import type { CartItemProps } from '../../App';

const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
   const { id, title, price, collection, sale, image, color, quantity, size } =
      cartItem;

   return (
      <Link to={`/productPage/${id}`} className="flex items-start gap-4 py-5">
         <div className="h-20 w-20 lg:h-40 lg:w-40 overflow-hidden flex-none">
            <img
               className="h-full w-full object-bottom object-cover"
               src={image}
               alt={title}
               loading="lazy"
            />
         </div>

         <div className="w-full md:h-40 flex flex-col lg:justify-around gap-4">
            <div className="flex items-start justify-between">
               <div className="flex flex-col">
                  <p className="font-medium text-[17px] lg:text-lg">{title}</p>
                  <div className="text-sm lg:text-[15px] font-normal capitalize">
                     <p>
                        {collection} — {color.split(' ').join(' • ')}
                     </p>
                     <p>{size}</p>
                  </div>
               </div>

               <p className="text-sm font-geist-mono flex gap-2">
                  {sale ? (
                     <>
                        <span>
                           €{formatPrice(price * (1 - sale.discount / 100))}
                        </span>
                        <span className="line-through text-neutral-600">
                           €{formatPrice(price)}
                        </span>
                     </>
                  ) : (
                     <span>€{formatPrice(price)}</span>
                  )}
               </p>
            </div>

            <div className="flex items-center justify-between">
               <div className="flex items-center">
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={(e) => {
                        e.preventDefault();
                        console.log('Qantity --');
                     }}
                  >
                     <Minus strokeWidth={1} />
                  </Button>
                  <span className="px-2">{quantity}</span>
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={(e) => {
                        e.preventDefault();
                        console.log('Qantity ++');
                     }}
                  >
                     <Plus strokeWidth={1} />
                  </Button>
               </div>

               <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                     e.preventDefault();
                     console.log(
                        `The product with the ID: ${id} is been dleted.`
                     );
                  }}
               >
                  <Trash2 strokeWidth={1} />
               </Button>
            </div>
         </div>
      </Link>
   );
};

export default CartItem;
