import BreadCrumb from "../components/common/Breadcrumb";
import ItemList from "@/components/common/ItemList";
import { Suspense } from "react";
import ProductsLoad from "@/components/products/ProductsLoad";
import { MENUS } from "../constants/category";

import { useRecoilValue } from "recoil";
import { productsList, filteredproductsList } from "@/store/products";

/**
 * 뷰페이지에는 특별한 로직이 포함되어서는 안됩니다.
 * 컴포넌트를 불러다 렌더링하는 용도로만 사용 하세요.
 */
const Accessory = (): JSX.Element => {
  /**
   * 해당 부분에 함수나 기타 로직등을 작성하지마세요.
   */
  const products = useRecoilValue(productsList).filter((v) => v.category === "jewelery");
  console.log("accessory: ", products);

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb category={MENUS.HOME} crumb={MENUS.ACCESSORY} />
      <article className="pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          <ItemList category="ACCESSORY" items={products} />
        </Suspense>
      </article>
    </section>
  );
};

export default Accessory;
