import { NavLink, useRouteLoaderData, useSearchParams } from "react-router-dom";
import usePrice from "../../hooks/use-price";
import { useState } from "react";

const Detail = () => {
  // Gọi danh sách sản phẩm từ localstorage
  const productArr = JSON.parse(localStorage.getItem("product")) ?? [];

  const [quantity, setQuantity] = useState(1);
  // Gọi custom hook price -> thêm dấu phân tách giữa các đơn vị
  const { priceFunction } = usePrice();

  // Lấy ds sản phẩm từ loader
  const products = useRouteLoaderData("root");
  // Lấy tham số từ url (id của sản phẩm và các sản phẩm liên quan)
  const [searchParams] = useSearchParams();
  const modeId = searchParams.get("mode");
  const prodRel = searchParams.get("prodRel");

  // Danh sách sản phẩm liên quan (có chung category)
  const relatedProduct = products.filter(
    (product) => product.category === prodRel
  );

  // Lấy giá trị quantity của sản phẩm
  const changeQuantityHandler = (event) => {
    setQuantity(+event.target.value);
  };

  // Hiển thị sản phẩm liên quan
  const relatedProductItem = relatedProduct.map((relProd) => {
    const price = priceFunction(relProd.price);

    return (
      <li key={relProd._id.$oid} className="list-none">
        <NavLink
          to={`/detail?mode=${relProd._id.$oid}&prodRel=${relProd.category}`}
        >
          <div className=" py-5 italic cursor-pointer text-center">
            <div className="overflow-hidden">
              <img
                src={relProd.img1}
                alt={relProd.name}
                className="hover:opacity-80 hover:scale-105 duration-500 mb-3"
              />
            </div>
            <h1 className="font-bold ">{relProd.name}</h1>
            <h1 className="text-gray-400">{price} VND</h1>
          </div>
        </NavLink>
      </li>
    );
  });

  // Thêm sản phẩm vào array productArr
  const [product] = products.filter((product) => product._id.$oid === modeId);
  const price = priceFunction(product.price);

  // Xử lý sự kiện khi thêm vào giỏ hàng
  const clickAddToCartHandler = (event) => {
    event.preventDefault();
    if (quantity > 11 || quantity < 1) {
      return;
    }

    let totalAmount = quantity * product.price;

    // Tạo sản phẩm mới, thêm các thuộc tính số lượng, tổng tiền vào sản phẩm đó để sử dụng trong trang cart và checkout
    const productAddToCart = {
      ...product,
      amount: totalAmount,
      quantity: quantity,
    };

    // Kiểm tra khi thêm vào giỏ hàng mà trong giỏ hàng có sản phẩm đó rồi thì tăng số lượng và giá tiền lên.
    if (
      productArr &&
      productArr.some((value) => value._id.$oid === productAddToCart._id.$oid)
    ) {
      const indexId = productArr.findIndex(
        (value) => value._id.$oid === productAddToCart._id.$oid
      );

      productArr[indexId].amount += totalAmount;
      productArr[indexId].quantity += quantity;

      // Lưu sản phẩm vào localstorage để sử dụng tiếp
      localStorage.setItem("product", JSON.stringify(productArr));
    } else {
      productArr.push(productAddToCart);

      localStorage.setItem("product", JSON.stringify(productArr));
    }
    setQuantity("");
  };

  // Xử lý phần mô tả sản phẩm.
  const longDescription = product.long_desc.split("•");
  const longDescriptionAirWatch = product.long_desc.split("-");

  return (
    <div className="mx-auto max-w-7xl italic">
      <div className="relative w-full h-80 bg-slate-100 mb-10">
        <div className="flex justify-between items-center absolute top-1/2 -translate-y-1/2 w-full px-20 italic">
          <h1 className="uppercase text-2xl">Detail Product</h1>
          <h3 className="uppercase text-base text-gray-500">Detail Product</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="grid grid-cols-4 gap-3">
          <div>
            <img
              src={product.img1}
              alt={product.img1}
              className="w-full  object-cover mb-4 hover:scale-110 duration-500"
            />
            <img
              src={product.img2}
              alt={product.img2}
              className="w-full  object-cover mb-4 hover:scale-110 duration-500"
            />
            <img
              src={product.img3}
              alt={product.img3}
              className="w-full  object-cover mb-4 hover:scale-110 duration-500"
            />
            <img
              src={product.img4}
              alt={product.img4}
              className="w-full  object-cover mb-4 hover:scale-110 duration-500"
            />
          </div>
          <div className="col-2/-1 place-self-center">
            <img
              src={product.img1}
              alt={product.img1}
              className="w-full  object-cover"
            />
          </div>
        </div>
        <div className="self-center">
          <h1 className="font-medium text-4xl ">{product.name}</h1>
          <h2 className="my-10 text-gray-400 text-2xl font-extralight">
            {price} VND
          </h2>
          <p className="font-extralight leading-7 my-10">
            {product.short_desc}
          </p>
          <h2 className="uppercase mb-5 tracking-wider">
            category:
            <span className="lowercase text-gray-500"> {product.category}</span>
          </h2>

          {/* FORM DANH SÁCH SẢN PHẨM */}
          <form className="flex justify-start items-center">
            <input
              placeholder="QUANTITY"
              value={quantity}
              onChange={changeQuantityHandler}
              type="number"
              step="1"
              min="1"
              max="10"
              className="w-1/3 focus:outline-none h-10 pl-3 border-solid border border-gray-400 placeholder:italic italic"
            />
            <button
              className="bg-black h-10 px-5 text-white italic"
              onClick={clickAddToCartHandler}
            >
              Add to cart
            </button>
          </form>
        </div>
      </div>
      <div className="my-20">
        <button className="uppercase bg-black text-white py-3 px-5 italic">
          Description
        </button>
        <h1 className="uppercase font-medium text-xl my-5">
          Product Description
        </h1>

        {/* HIỂN THỊ DANH SÁCH CÁC MÔ TẢ CỦA SẢN PHẨM */}
        <ul>
          {(prodRel === "watch" || prodRel === "airpod") &&
            modeId !== "62ccdb045eefc71539bb6b56" &&
            longDescriptionAirWatch.map((text) => {
              return (
                <li
                  key={text}
                  className="mb-1 list-disc first:list-none first:mb-3 first:uppercase first:text-lg"
                >
                  {text}
                </li>
              );
            })}

          {/* HIỂN THỊ DANH SÁCH CÁC MÔ TẢ CỦA SẢN PHẨM */}
          {(prodRel === "ipad" ||
            prodRel === "iphone" ||
            modeId === "62ccdb045eefc71539bb6b56") &&
            longDescription.map((text) => {
              return (
                <li
                  key={text}
                  className="mb-1 list-disc first:list-none first:mb-3 first:uppercase first:text-lg"
                >
                  {text}
                </li>
              );
            })}
        </ul>
      </div>
      <div className="">
        <h1 className="uppercase font-medium text-xl my-5">Related products</h1>
        <div className="grid grid-cols-4 gap-5">{relatedProductItem}</div>
      </div>
    </div>
  );
};

export default Detail;
