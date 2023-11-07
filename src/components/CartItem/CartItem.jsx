/* eslint-disable react/prop-types */

export const CartItem = ({id,thumbnail,title,price,quantity,addToCart}) => {

  return (
    <>
        <li key={id}>
          <img src={thumbnail} alt={title} />
          <div>
            <strong>{title}</strong> - ${price}
          </div>
          <footer>
            <small>Qty:{quantity}</small>
            <button
              onClick={addToCart}
            >
              +
            </button>
          </footer>
        </li>
    </>
  );
};
