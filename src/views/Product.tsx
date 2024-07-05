import React, { Suspense } from "react";
import ProductViewLoad from "@/components/products/ProductViewLoad";
import { useParams } from "react-router";
import BreadCrumb from "@/components/common/Breadcrumb";
import { useRecoilValue } from "recoil";
import { productsList } from "@/store/products";
import { Category } from "@/constants/category";
import ProductView from "@/components/products/ProductView";

const Product = () => {
  const params = useParams();
  const productID = params.id;
  const product = useRecoilValue(productsList).filter((v) => v.id === Number(productID))[0];

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <Suspense fallback={<ProductViewLoad />}>
        <BreadCrumb category={Category[product.category]} crumb={product.title} />
        <ProductView product={product} />
      </Suspense>
    </section>
  );
};

export default Product;
