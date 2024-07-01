import Slider from "../components/common/Slider";
import ItemList from "@/components/common/ItemList";
import products from "@public/products.json";

const Index = (): JSX.Element => {
  const product = JSON.parse(JSON.stringify(products));
  const fashionItems = [product[0], product[1], product[2], product[3]];
  const accessoryItems = [product[4], product[5], product[6], product[7]];
  const digitalItems = [product[8], product[9], product[10], product[11]];

  return (
    <>
      <Slider />
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ItemList category="FASHION" items={fashionItems} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ItemList category="ACCESSORY" items={accessoryItems} />
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto">
        {/* componetns products 폴더에 공통으로 사용할 ItemList 컴포넌트를 만들어서 노출 시켜 보세요. */}
        <ItemList category="DIGITAL" items={digitalItems} />
      </section>
    </>
  );
};

export default Index;
