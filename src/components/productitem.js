import { Link } from 'react-router-dom';

export default function ProductItem({ item, addToCart }) {
  return (
    <div className="item_list">

      {/* ✅ 이미지 클릭 → 상세페이지 이동 */}
      <Link to={`/detail/${item.id}`}>
        <div className="item_picture">
          <img
            src={process.env.PUBLIC_URL + "/images/" + item.img}
            alt={item.name}
          />
        </div>
      </Link>

      <div className="text_box">
        <p className="item_name">{item.name}</p>
        <p className="item_price">{item.price}</p>

        {/* 장바구니 버튼 */}
        <button
          className="cart_btn"
          onClick={() => addToCart(item)}
        >
          장바구니
        </button>
      </div>

    </div>
  );
}