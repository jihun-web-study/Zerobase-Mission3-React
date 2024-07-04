import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "@/store/products";

type ItemProps = { item: IProduct };

const Item = ({ item }: ItemProps) => {
  return (
    <Link
      className="card group card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal"
      to={`/product/${item.id}`}
    >
      <figure className="flex h-80 bg-white overflow-hidden">
        <img
          src={item.image}
          alt="상품 이미지"
          className="w-1/2 h-1/2 group-hover:scale-120 transition-transform duration-300"
        />
      </figure>
      <div className="card-body bg-gray-100 dark:bg-gray-700">
        <p className="card-title text-base">{item.title}</p>
        <p className="text-base">{Math.floor(item.price)}</p>
      </div>
    </Link>
  );
};

export default Item;
