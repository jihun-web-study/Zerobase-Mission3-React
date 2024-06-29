import NavSideMenu from "./components/NavSideMenu";
import NavTitle from "./components/NavTitle";
import NavMenuButtons from "./components/NavMenuButtons";
import NavSettingView from "./components/NavSettingView";
import NavSearchBar from "./components/NavSearchBar";
import NavCart from "./components/NavCart";

const Nav = () => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <NavSideMenu />
        <NavTitle />
        <NavMenuButtons />
        <div className="flex items-center px-2">
          <NavSettingView />
          <NavSearchBar />
          <NavCart />
        </div>
      </div>
    </div>
  );
};

export default Nav;
