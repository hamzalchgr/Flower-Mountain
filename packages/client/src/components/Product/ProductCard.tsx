import { Link } from 'react-router-dom';
import type { Product } from '../../App';
import { formatPrice } from '../../utils/formatPrice';

const ProductCard = ({ product }: { product: Product }) => {
   const { id, title, price, collection, images = [], color, sale } = product;
   
   return (
      <Link aria-label={`View ${title}`} to={`/productPage/${id}`}>
         <div className="px-2">
            <div className="aspect-square w-full overflow-hidden">
               <img
                  className="w-full h-full object-bottom object-cover"
                  src={images[0]}
                  alt={title}
                  loading="lazy"
               />
            </div>

            <div className="py-3 flex flex-col">
               <p className="text-[15px] font-bold">{title}</p>
               <p className="text-[15px] capitalize">
                  {collection} — {color.split(' ').join(' • ')}
               </p>

               <p className="text-[13px] font-geist-mono flex gap-2">
                  {sale ? (
                     <>
                        <span>
                           €{(price * (1 - sale.discount / 100)).toFixed(2)}
                        </span>
                        <span className="line-through text-neutral-600">
                           €{price}
                        </span>
                        <span className="text-green-600">
                           {sale.discount}% off
                        </span>
                     </>
                  ) : (
                     <span>€{formatPrice(price)}</span>
                  )}
               </p>
            </div>
         </div>
      </Link>
   );
};

export default ProductCard;
