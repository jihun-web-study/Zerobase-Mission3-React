import { cartList } from "../../store/cart";
import { useRecoilValue } from "recoil";
import CartItem from "./CartItem";

const CartList = (): JSX.Element => {
  // Recoil을 사용해서 cart데이터를 가져오는 예제입니다.
  const cartLists = useRecoilValue(cartList);

  return (
    <>
      {cartLists.map((v) => (
        <CartItem key={v.id} item={v} />
      ))}
    </>
  );
};

export default CartList;
