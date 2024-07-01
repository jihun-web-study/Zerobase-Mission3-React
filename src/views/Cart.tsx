import React from "react";
import CartList from "@/components/carts/CartList";
import CartView from "@/components/carts/CartView";

const Cart = () => {
  const hasCart = false;

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      {hasCart ? <CartList /> : <CartView />}
    </section>
  );
};

export default Cart;
