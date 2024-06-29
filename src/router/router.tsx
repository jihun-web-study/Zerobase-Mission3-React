import { Routes, Route } from "react-router-dom";
import { memo } from "react";
import Error from "../views/Error";
import Index from "../views/Index";
import Fashion from "../views/Fashion";
import Accessory from "../views/Accessory";
import Digital from "../views/Digital";
import Cart from "../views/Cart";
import Product from "../views/Product";

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
      {/* 라우팅 추가 해보세요. */}
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default memo(Router);
