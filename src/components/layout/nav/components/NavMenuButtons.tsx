import { Link } from "react-router-dom";

const NavMenuButtons = () => {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to="/fashion">
        패션
      </Link>
      <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to="/accessory">
        액세서리
      </Link>
      <Link className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white" to="/digital">
        디지털
      </Link>
    </div>
  );
};

export default NavMenuButtons;
