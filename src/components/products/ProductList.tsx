import React from "react";
import ItemList from "@/components/common/ItemList";
import { IProduct } from "@/store/products";
import ProductsLoad from "./ProductsLoad";

interface StateProps {
  state: "loading" | "hasValue" | "hasError";
  category: "FASHION" | "ACCESSORY" | "DIGITAL";
  items: IProduct[];
}

const ProductList = ({ state, category, items }: StateProps) => {
  switch (state) {
    case "loading":
      return <ProductsLoad limit={4} />;

    case "hasValue":
      return <ItemList category={category} items={items} />;

    default:
      return <h3>Error가 발생하였습니다...</h3>;
  }
};

export default ProductList;
