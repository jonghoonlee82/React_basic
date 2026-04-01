import { useParams } from 'react-router-dom';
import products from '../data/products';

export default function Detail({ addToCart }) {
  const { id } = useParams();

  const product = products.find(item => item.id === Number(id));

  if (!product) {
    return <p>상품을 찾을 수 없습니다.</p>;
  }

  return (
    <div className="detail_wrap">
      <div className="detail_img">
        <img
          src={process.env.PUBLIC_URL + "/images/" + product.img}
          alt={product.name}
        />
      </div>

      <div className="detail_text">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>

        <button
          className="cart_btn"
          onClick={() => addToCart(product)}
        >
          장바구니 담기
        </button>
      </div>
    </div>
  );
}