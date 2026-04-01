import products from '../data/products';
import ProductItem from './productitem';

export default function All({ addToCart }) {
  return (
    <div className="item_box">
      {products.map(item => (
        <ProductItem 
          key={item.id} 
          item={item} 
          addToCart={addToCart}  
        />
      ))}
    </div>
  );
}