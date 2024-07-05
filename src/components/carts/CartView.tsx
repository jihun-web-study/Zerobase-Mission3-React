import { Link } from "react-router-dom";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";
import CartList from "@/components/carts/CartList";
import { toCurrencyFormat, isObjectEmpty } from "@/helpers/helpers";
import { useRecoilValue } from "recoil";
import { cartState, cartTotal, ICartState } from "@/store/cart";

const CartView = (): JSX.Element => {
  const cart = useRecoilValue<ICartState>(cartState);
  const isCartEmpty = isObjectEmpty(cart);
  const totalPrice = useRecoilValue(cartTotal);

  const CartListNone = () => {
    return (
      <div>
        <h1 className="text-2xl">장바구니에 물품이 없습니다.</h1>
        <Link to="/" className="btn btn-primary mt-10">
          담으러 가기
        </Link>
      </div>
    );
  };

  const Purchase = () => {
    return (
      <div className="self-start shrink-0 flex items-center mt-10 mb-20">
        <span className="text-xl md:text-2xl">{`총 : ${toCurrencyFormat(totalPrice)}`}</span>
        <label htmlFor="confirm-modal" className="modal-button btn btn-primary ml-5">
          구매하기
        </label>
      </div>
    );
  };

  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0">
        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
        {/* 물품이 없다면? */}
        {isCartEmpty && <CartListNone />}

        <div className="lg:flex justify-between mb-20">
          <div>
            {/* 물품이 있다면? */}
            {!isCartEmpty && <CartList />}
          </div>
          <Purchase />
        </div>
      </div>
      <Confirm />
    </>
  );
};

export default CartView;
