import { Link } from "react-router-dom";

const NavTitle = () => {
  return (
    <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
      <Link className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap" to="/">
        React Shop
      </Link>
    </h1>
  );
};

export default NavTitle;
