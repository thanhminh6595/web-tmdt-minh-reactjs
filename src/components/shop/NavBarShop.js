import { NavLink } from "react-router-dom";

const NavBarShop = () => {
  return (
    <div className="italic w-full ">
      <h1 className=" py-1 text-2xl tracking-wide uppercase mb-5">
        Categories
      </h1>
      <div className="mb-2 pr-5">
        <h2 className=" pl-7 py-1 uppercase bg-black text-white">Apple</h2>
        <NavLink to="/shop?mode=all">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">All</div>
        </NavLink>
      </div>
      <div className="mb-2 pr-5">
        <h2 className="bg-gray-100 pl-7 py-1 uppercase">iphone & mac</h2>
        <NavLink to="/shop?mode=iphone">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            iphone
          </div>
        </NavLink>
        <NavLink to="/shop?mode=ipad">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">ipad</div>
        </NavLink>
        <NavLink to="/shop?mode=macbook">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            macbook
          </div>
        </NavLink>
      </div>
      <div className="mb-2 pr-5">
        <h2 className="bg-gray-100 pl-7 py-1 uppercase">wireless</h2>
        <NavLink to="/shop?mode=airpod">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            airpod
          </div>
        </NavLink>
        <NavLink to="/shop?mode=watch">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            watch
          </div>
        </NavLink>
      </div>
      <div className="mb-2 pr-5">
        <h2 className="bg-gray-100 pl-7 py-1 uppercase">other</h2>
        <NavLink to="/shop?mode=mouse">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            mouse
          </div>
        </NavLink>
        <NavLink to="/shop?mode=keyboard">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            keyboard
          </div>
        </NavLink>
        <NavLink to="/shop?mode=other">
          <div className="hover:text-orange-600 pl-7 py-1 capitalize">
            other
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarShop;
