import React from "react";
import Rating from "@/components/common/Rating";
import { IProduct } from "@/store/products";
import { Link } from "react-router-dom";
import { toCurrencyFormat } from "@/helpers/helpers";

interface ProductViewProps {
  product: IProduct;
}

const ProductView = ({ product }: ProductViewProps) => {
  const ViewImage = () => {
    return (
      <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-16 py-4 bg-white view_image">
        <img src={product.image} alt={product.title} className="object-contain w-full h-72" />
      </figure>
    );
  };

  const CardTitleAndDescription = () => {
    return (
      <>
        <h2 className="card-title">
          {product.title}
          <span className="badge badge-accent ml-2">NEW</span>
        </h2>
        <p>{product.description}</p>
      </>
    );
  };

  const CardPrice = () => {
    return <p className="mt-2 mb-4 text-3xl">${toCurrencyFormat(product.price)}</p>;
  };

  const CardActions = () => {
    // 장바구니 담기 로직 추가 해야함
    const onClickHandler = () => {
      console.log("장바구니 담기 클릭");
    };

    return (
      <div className="card-actions">
        <button className="btn btn-primary" onClick={onClickHandler}>
          장바구니에 담기
        </button>
        <Link className="btn btn-outline ml-1" to={"/cart"}>
          장바구니로 이동
        </Link>
      </div>
    );
  };

  const ViewCard = () => {
    return (
      <div className="card-body px-1 lg:px-12">
        <CardTitleAndDescription />
        <Rating rate={product.rating.rate} count={product.rating.count} />
        <CardPrice />
        <CardActions />
      </div>
    );
  };

  return (
    <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
      <ViewImage />
      <ViewCard />
    </div>
  );
};

export default ProductView;
