import { Suspense, lazy } from "react";
import Slider from "../components/common/Slider";
import ProductsLoad from "@/components/products/ProductsLoad";
import { useRecoilValue } from "recoil";
import { filteredproductsList } from "@/store/products";

const ItemList = lazy(() => import("@/components/common/ItemList"));

const Index = (): JSX.Element => {
  const representProducts = useRecoilValue(filteredproductsList);
  console.log("representProducts: ", representProducts);

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          <ItemList category="FASHION" items={representProducts.fashion} />
        </Suspense>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          <ItemList category="ACCESSORY" items={representProducts.accessory} />
        </Suspense>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          {" "}
          <ItemList category="DIGITAL" items={representProducts.digital} />
        </Suspense>
      </section>
    </>
  );
};

export default Index;
