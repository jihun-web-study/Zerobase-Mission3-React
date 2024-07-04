import { Link } from "react-router-dom";

const Drawer = (): JSX.Element => {
  const MenuList = [
    { key: 1, menu: "패션", to: "/fashion" },
    { key: 2, menu: "액세서리", to: "/accessory" },
    { key: 3, menu: "디지털", to: "/digital" },
  ];

  // 직접 DOM을 조작하는 것이라 수정 필요함
  const handleLinkClick = () => {
    const checkbox = document.getElementById("side-menu") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  };

  return (
    <div className="drawer-side">
      <label htmlFor="side-menu" className="drawer-overlay"></label>
      <ul className="menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100">
        {/* 모바일 메뉴를 노출시켜 보세요. */}
        {MenuList.map(({ key, menu, to }) => (
          <li key={key}>
            <Link className="!text-gray-700 active:!text-white dark:!text-white" to={to} onClick={handleLinkClick}>
              {menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
