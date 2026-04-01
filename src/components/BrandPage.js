import { useParams } from 'react-router-dom';
import products from '../data/products';
import ProductItem from './productitem';

export default function BrandPage({ addToCart }) {
  const { brand } = useParams();

  const filtered = products.filter(item => item.brand === brand);

  // ✅ 데이터 없을 때
  if (filtered.length === 0) {
    return <p>상품이 없습니다.</p>;
  }

  return (
    <div>
      {/* ✅ 브랜드 타이틀 */}
      <h2 className="brand_title">{brand.toUpperCase()}</h2>

      <div className="item_box">
        {filtered.map(item => (
          <ProductItem 
            key={item.id} 
            item={item} 
            addToCart={addToCart}   // 여기 핵심
          />
        ))}
      </div>
    </div>
  );
}