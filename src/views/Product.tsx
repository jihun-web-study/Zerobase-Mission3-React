import React from "react";
import ProductsLoad from "@/components/products/ProductsLoad";

const Product = () => {
  return (
    <div>
      Product
      <ProductsLoad limit={2} />
    </div>
  );
};

export default Product;
