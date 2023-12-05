import { useSearchParams, useRouteLoaderData, NavLink } from "react-router-dom";
import usePrice from "../../hooks/use-price";
import { useState } from "react";

const ProductsListShop = () => {
  // Khai báo biến nhập tìm kiếm sản phẩm
  const [enteredSearch, setEnteredSearch] = useState("");
  // Gọi custom hook từ Price
  const { priceFunction } = usePrice();
  // Lấy data từ hàm loader được định nghĩa ở root router
  const products = useRouteLoaderData("root");
  // Lấy tham số từ hàm url
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");

  let updateProducts = [];

  // Kiểm tra điều kiện nếu mode = all thì hiển thị tất cả các sản phẩm
  if (mode === "all" && enteredSearch.trim().length === 0) {
    updateProducts.push(...products);
    // Kiểm tra diều kiện tìm kiếm trong input search -> hiển thị các sản phẩm theo tên tìm kiếm
  } else if (enteredSearch.trim().length !== 0) {
    updateProducts = products.filter((product) => {
      return product.name.includes(enteredSearch);
    });
    // Kiểm tra diều kiệnkhi nhấn vào danh mục tìm kiếm -> hiển thị các sản phẩm theo danh mục category
  } else {
    updateProducts = products.filter((product) => {
      return product.category === mode && product.name.includes(enteredSearch);
    });
  }

  // Hiển thị danh sách sản phẩm
  const productList =
    updateProducts &&
    updateProducts.map((product) => {
      const price = priceFunction(product.price);

      return (
        <li key={product._id.$oid} className="list-none">
          <NavLink
            to={`/detail?mode=${product._id.$oid}&prodRel=${product.category}`}
          >
            <div className=" py-5 italic cursor-pointer text-center">
              <div className="overflow-hidden">
                <img
                  src={product.img1}
                  alt={product.name}
                  className="hover:opacity-80 hover:scale-105 duration-500 mb-3"
                />
              </div>
              <h1 className="font-bold ">{product.name}</h1>
              <h1 className="text-gray-400">{price} VND</h1>
            </div>
          </NavLink>
        </li>
      );
    });

  // Xử lý thay đổi tìm kiếm
  const changeSearchHandler = (event) => {
    setEnteredSearch(event.target.value);
  };

  return (
    <div className="col-2/-1">
      <div className="flex justify-between items-center">
        <input
          type="text"
          onChange={changeSearchHandler}
          value={enteredSearch}
          placeholder="Enter search here!"
          className="border border-solid border-gray-400 w-1/3 h-10 pl-2 placeholder:italic focus:outline-none"
        />
        <select>
          <option value="Default">Sort</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-5">{productList}</div>
    </div>
  );
};

export default ProductsListShop;
