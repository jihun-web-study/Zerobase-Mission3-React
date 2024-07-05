import { toCurrencyFormat } from "@/helpers/helpers";
import { addToCart, cartState, ICartItems, ICartState, removeFromCart } from "@/store/cart";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

const CartItem = ({ item }: { item: ICartItems }) => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);

  // store/cart.ts를 참고하세요.
  const onClickMinus = () => {
    console.log("minus");
    setCart(removeFromCart(cart, item.id));
  };

  const onClickPlus = () => {
    console.log("plus");
    const newCart = addToCart(cart, item.id);
    setCart(newCart);
  };

  return (
    <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
      {/* 카트 리스트 화면을 구성 해보세요. */}
      <Link to={`/product/${item.id}`}>
        <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
          <img
            src={item.image}
            alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            className="object-contain w-full h-48"
          />
        </figure>
      </Link>

      <div className="card-body px-1 lg:px-12">
        <h2 className="card-title">
          <Link className="link link-hover" to={`/product/${item.id}`}>
            {item.title}
          </Link>
        </h2>
        <p className="mt-2 mb-4 text-3xl">
          {toCurrencyFormat(item.price * item.count)} <span className="text-2xl">{toCurrencyFormat(item.price)}</span>
        </p>
        <div className="card-actions">
          <div className="btn-group">
            <button className="btn btn-primary" onClick={onClickMinus}>
              -
            </button>
            <button className="btn btn-ghost no-animation">{item.count}</button>
            <button className="btn btn-primary" onClick={onClickPlus}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
