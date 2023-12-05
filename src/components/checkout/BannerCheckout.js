import { NavLink } from "react-router-dom";

const BannerCheckout = () => {
  return (
    <>
      <div className="relative w-full h-80 bg-slate-100 ">
        <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-20 italic">
          <h1 className="uppercase text-2xl">checkout</h1>
          <div className="uppercase text-base ">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-gray-500 mr-3 " : "mr-3"
              }
              to="/"
            >
              home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-gray-500 mr-3" : "mr-3"
              }
              to="/cart"
            >
              cart
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-gray-500 mr-3" : "mr-3"
              }
              to="/checkout"
            >
              checkout
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerCheckout;
