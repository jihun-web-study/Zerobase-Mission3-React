import { Suspense, lazy } from "react";
import Slider from "../components/common/Slider";
import useGetItems from "@/store/useGetItems";
import ProductsLoad from "@/components/products/ProductsLoad";
const ItemList = lazy(() => import("@/components/common/ItemList"));

const API_URL = "https://fakestoreapi.com/products";

const Index = (): JSX.Element => {
  const { data, loading, error } = useGetItems(API_URL);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          <ItemList category="FASHION" items={[data[0], data[1], data[2], data[3]]} />
        </Suspense>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          <ItemList category="ACCESSORY" items={[data[4], data[5], data[6], data[7]]} />
        </Suspense>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <Suspense fallback={<ProductsLoad limit={4} />}>
          <ItemList category="DIGITAL" items={[data[8], data[9], data[10], data[11]]} />
        </Suspense>
      </section>
    </>
  );
};

export default Index;
