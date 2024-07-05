import Slider from "../components/common/Slider";
import { useRecoilValueLoadable } from "recoil";
import { mainProductsList } from "@/store/products";
import ProductList from "@/components/products/ProductList";
//import { lazy, Suspense } from "react";
//const ItemList = lazy(() => import("@/components/common/ItemList"));
//import ProductsLoad from "@/components/products/ProductsLoad";
const Index = (): JSX.Element => {
  const { state, contents: representProducts } = useRecoilValueLoadable(mainProductsList);

  // Suspnese가 동작(스켈레톤 UI)안함 + useRecoildValue의 동기적 실행으로 인해 마운트전 렌더링 에러 발생
  // => useRecoilValueLoadable의 state로 분기함

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ProductList state={state} category={"FASHION"} items={representProducts.fashion} />
        {/* <Suspense fallback={<ProductsLoad limit={4} />}>
          {state === "hasValue" && <ItemList category="FASHION" items={representProducts.fashion} />}
        </Suspense> */}
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ProductList state={state} category={"ACCESSORY"} items={representProducts.accessory} />
        {/* <Suspense fallback={<ProductsLoad limit={4} />}>
          {state === "hasValue" && <ItemList category="FASHION" items={representProducts.accessory} />}
        </Suspense> */}
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ProductList state={state} category={"DIGITAL"} items={representProducts.digital} />
        {/* <Suspense fallback={<ProductsLoad limit={4} />}>
          {state === "hasValue" && <ItemList category="FASHION" items={representProducts.digital} />}
        </Suspense> */}
      </section>
    </>
  );
};

export default Index;
