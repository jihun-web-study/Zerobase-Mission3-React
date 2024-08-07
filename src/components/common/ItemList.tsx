import { MENUS } from "@/constants/category";
import Item from "./Item";
import { IProduct } from "@/store/products";

interface ItemListProps {
  category: "FASHION" | "ACCESSORY" | "DIGITAL";
  items: IProduct[];
}

// 메인페이지에서 카테고리에 맞는 대표 아이템을 보여줌
const ItemList = ({ category, items }: ItemListProps) => {
  return (
    <>
      <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{MENUS[category]}</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
        {items?.map((item, idx) => (
          <Item key={item.id || idx} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
