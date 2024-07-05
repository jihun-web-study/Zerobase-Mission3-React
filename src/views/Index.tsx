import { lazy, Suspense } from "react";
import Slider from "../components/common/Slider";
import ProductsLoad from "@/components/products/ProductsLoad";
import { useRecoilValueLoadable } from "recoil";
import { mainProductsList } from "@/store/products";
import ItemList from "@/components/common/ItemList";
//const ItemList = lazy(() => import("@/components/common/ItemList"));

const Index = (): JSX.Element => {
  const { state, contents: representProducts } = useRecoilValueLoadable(mainProductsList);
  console.log("representProducts: ", state, representProducts);

  // Suspnese가 동작안함 + useRecoildValue의 동기적 실행으로 인해 마운트전 렌더링 에러 발생
  // => useRecoilValueLoadable의 state로 분기함
  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        {state === "loading" && <ProductsLoad limit={4} />}
        {state === "hasValue" && <ItemList category="FASHION" items={representProducts.fashion} />}
        {/* <Suspense fallback={<ProductsLoad limit={4} />}>
          {state === "hasValue" && <ItemList category="FASHION" items={representProducts.fashion} />}
        </Suspense> */}
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        {state === "loading" && <ProductsLoad limit={4} />}
        {state === "hasValue" && <ItemList category="FASHION" items={representProducts.accessory} />}
        {/* <Suspense fallback={<ProductsLoad limit={4} />}>
          {state === "hasValue" && <ItemList category="FASHION" items={representProducts.accessory} />}
        </Suspense> */}
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        {state === "loading" && <ProductsLoad limit={4} />}
        {state === "hasValue" && <ItemList category="FASHION" items={representProducts.digital} />}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          {state === "hasValue" && <ItemList category="FASHION" items={representProducts.digital} />}
        </Suspense>
      </section>
    </>
  );
};

export default Index;
