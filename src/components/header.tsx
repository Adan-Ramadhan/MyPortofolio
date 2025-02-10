import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full min-h-auto overflow-hidden">
      <nav className="w-full xl:w-3/4 mx-auto z-10 p-3 flex items-center justify-between ">
        <div>
          <Link to="/">
            <h1 className="font-semibold text-lg md:text-xl">Adan Ramadhan</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
