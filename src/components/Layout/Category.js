import { NavLink } from "react-router-dom";
import product_1 from "../../assets/product_1.png";
import product_2 from "../../assets/product_2.png";
import product_3 from "../../assets/product_3.png";
import product_4 from "../../assets/product_4.png";
import product_5 from "../../assets/product_5.png";

const Category = () => {
  return (
    <div className="mx-auto max-w-7xl mb-10">
      <div className="uppercase italic text-center my-10">
        <h2 className="text-gray-400">Carefully created collections</h2>
        <h1 className="text-2xl font-normal">browse our categories</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-5 mb-5">
          <NavLink to="/shop">
            <img
              className="w-full h-full object-cover hover:opacity-80 cursor-pointer duration-500"
              src={product_1}
              alt={product_1}
            />
          </NavLink>
          <NavLink to="/shop">
            <img
              className="w-full h-full object-cover hover:opacity-80 cursor-pointer duration-500"
              src={product_2}
              alt={product_2}
            />
          </NavLink>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <NavLink to="/shop">
            <img
              className="w-full h-full object-cover hover:opacity-80 cursor-pointer duration-500"
              src={product_3}
              alt={product_3}
            />
          </NavLink>
          <NavLink to="/shop">
            <img
              className="w-full h-full object-cover hover:opacity-80 cursor-pointer duration-500"
              src={product_4}
              alt={product_4}
            />
          </NavLink>
          <NavLink to="/shop">
            <img
              className="w-full h-full object-cover hover:opacity-80 cursor-pointer duration-500"
              src={product_5}
              alt={product_5}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Category;
