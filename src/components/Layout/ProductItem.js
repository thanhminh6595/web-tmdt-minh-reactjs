import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import usePrice from "../../hooks/use-price";

const ProductItem = () => {
  // Gọi custom hook price
  const { priceFunction } = usePrice();

  // Lấy state product từ store để hiển thị
  const product = useSelector((state) => state.reducer.products);
  const price = priceFunction(product.price);

  return (
    <>
      {product && (
        <div className="grid grid-cols-2 italic">
          <div>
            <img
              src={product.img1}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="py-10 px-10">
            <h1 className="font-medium text-2xl mb-1">{product.name}</h1>
            <p className="text-gray-500 mb-1">{price} VND</p>
            <p className="text-gray-400 text-sm mb-5 text-justify leading-7">
              {product.short_desc}
            </p>
            <NavLink
              to={`/detail?mode=${product._id.$oid}&prodRel=${product.category}`}
              className="-ml-4"
            >
              <button className="bg-black text-white py-2 px-5 italic text-xl font-thin flex justify-between items-center">
                <i className="fa-solid fa-circle-info mr-2"></i>
                <div>View Detail</div>
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
