import { atom, selector } from "recoil";
import { CART_ITEM } from "../constants/category";
import { productsList } from "./products";

export interface ICartInfo {
  readonly id: number;
  readonly count: number;
}

export interface ICartItems {
  readonly id: string;
  readonly title: string;
  readonly price: number;
  readonly count: number;
  readonly image: string;
}

export interface ICartState {
  readonly items?: Record<string | number, ICartInfo>;
}

/**
 * 카트의 상태는 localStorage 기준으로 초기화 됩니다.
 * 카트의 상태는 새로고침해도 유지되어야 하기 때문입니다.
 */
export const cartState = atom<ICartState>({
  key: "cart",
  default: {},
  effects: [
    ({ setSelf, onSet }) => {
      localStorage.getItem(CART_ITEM) && setSelf(JSON.parse(localStorage.getItem(CART_ITEM) as string));
      onSet((value) => localStorage.setItem(CART_ITEM, JSON.stringify(value)));
    },
  ],
});

// 카트에 담긴 총 개수
export const cartCount = selector<number>({
  key: "cartCount",
  get: ({ get }) => {
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc: number, index: string) => {
      return acc + cartItems[index].count || 0;
    }, 0);
  },
});

// 카트에 담긴 총 가격
export const cartTotal = selector<number>({
  key: "cartTotal",
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc: number, id: string) => {
      return acc + cartItems[id].count * products[parseInt(id) - 1].price || 0;
    }, 0);
  },
});
/**
 * cartList를 구현 하세요.
 * id, image, count 등을 return합니다.
 */
export const cartList = selector<ICartItems[]>({
  key: "cartList",
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return Object.keys(cartItems).map((id) => {
      const items = cartItems[id];
      return {
        id: items.id,
        image: products[items.id - 1].image,
        title: products[items.id - 1].title,
        count: items.count,
        price: products[items.id - 1].price,
      };
    });
  },
});

// addToCart는 구현 해보세요.
export const addToCart = (cart: ICartState, id: string) => {
  if (!cartState[id]) {
    cartState[id] = { id, count: 1 };
    return { ...cart, [id]: { id, count: 1 } };
  }

  cartState[id].count++;
  return { ...cart, [id]: { id: id, count: cartState[id].count } };
};

// removeFromCart는 참고 하세요.
export const removeFromCart = (cart: ICartState, id: string) => {
  const tempCart = { ...cart };
  if (tempCart[id].count === 1) {
    delete tempCart[id];
    return tempCart;
  } else {
    return { ...tempCart, [id]: { id: id, count: cart[id].count - 1 } };
  }
};

/**
 * 그 외에 화면을 참고하며 필요한 기능들을 구현 하세요.
 */
