import { selector } from "recoil";
import CONSTANTS from "../constants/constants";
import { Category } from "@/constants/category";

// 혹시 API통신이 되지 않는다면 /product.json파일을 활용해서 로드하세요.
// const productsURL = '/products.json';
const productsURL = `${CONSTANTS.IS_DEV ? `/proxy` : `${import.meta.env.VITE_FAKE_STORE_API}`}/products`;
console.log(productsURL);

interface IRating {
  readonly rate?: number;
  readonly count?: number;
}
export interface IProduct {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly category: string;
  readonly price: number;
  readonly image: string;
  readonly rating: IRating;
}

/**
 * productList는 API 1회 요청 후에 유지됩니다.
 * 디테일 페이지에서는 productDetail/id로 각각 호출하셔도 무방합니다.
 */
export const productsList = selector<IProduct[]>({
  key: "productsList",
  get: async () => {
    try {
      const response = await fetch(productsURL);
      return (await response.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
      return [];
    }
  },
});

interface ProductGroup {
  fashion: IProduct[];
  accessory: IProduct[];
  digital: IProduct[];
}

export const filteredProductsList = selector<ProductGroup>({
  key: "filteredProductsList",
  get: ({ get }) => {
    const products = get(productsList);

    const groupedProducts = products.reduce<ProductGroup>(
      (group, product) => {
        switch (Category[product.category]) {
          case "패션":
            group.fashion.push(product);
            break;
          case "액세서리":
            group.accessory.push(product);
            break;
          case "디지털":
            group.digital.push(product);
            break;
        }
        return group;
      },
      { fashion: [], accessory: [], digital: [] }
    );

    return groupedProducts;
  },
});

export const mainProductsList = selector<ProductGroup>({
  key: "mainProductsList",
  get: ({ get }) => {
    const groupedProducts = get(filteredProductsList);

    return {
      fashion: groupedProducts.fashion.slice(0, 4),
      accessory: groupedProducts.accessory.slice(0, 4),
      digital: groupedProducts.digital.slice(0, 4),
    };
  },
});
