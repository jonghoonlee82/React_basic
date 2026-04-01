export default function Cart({ cart, removeFromCart, updateCount }) {

  // ✅ 총 가격 계산
  const totalPrice = cart.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^0-9]/g, ''));
    return acc + price * item.count;
  }, 0);

  return (
    <div className="cart_wrap">
      <h2>장바구니</h2>

      {cart.length === 0 ? (
        <p>장바구니가 비어있습니다.</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart_item" key={item.id}>

              <img
                src={process.env.PUBLIC_URL + "/images/" + item.img}
                alt={item.name}
              />

              <div className="cart_info">
                <p>{item.name}</p>
                <p className="cart_price">{item.price}</p>

                <div className="count_box">
                  <button onClick={() => updateCount(item.id, 'minus')}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => updateCount(item.id, 'plus')}>+</button>
                </div>
              </div>

              <button
                className="remove_btn"
                onClick={() => removeFromCart(item.id)}
              >
                삭제
              </button>

            </div>
          ))}

          {/*  총 가격 */}
          <div className="total_price">
            총 금액: {totalPrice.toLocaleString()}원
          </div>
        </>
      )}
    </div>
  );
}