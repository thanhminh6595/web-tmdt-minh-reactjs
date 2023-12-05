import { useDispatch } from "react-redux";
import { productActions } from "../../store/product-store";
import usePrice from "../../hooks/use-price";

const ProductsList = ({ products }) => {
  // Gọi custom hook price và gọi hàm action từ store
  const { priceFunction } = usePrice();
  const dispatch = useDispatch();

  // Hiển thị danh sách sản phẩm trang home
  const productItem = products.map((product) => {
    // khai báo price sau khi được chỉnh sửa
    const price = priceFunction(product.price);

    // Xử lý click vào sản phẩm -> hiển thị popup đồng thời gọi addProduct ở store ->từ đó có thể lấy state bằng các sử dụng useSelector ở file khác
    const clickProItemHandler = () => {
      dispatch(productActions.addProduct(product));
      dispatch(productActions.show());
    };

    return (
      <li key={product._id.$oid} onClick={clickProItemHandler}>
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
      </li>
    );
  });

  return (
    <section className="mx-auto max-w-7xl my-10">
      <div className="uppercase italic mb-5">
        <h3 className="text-gray-400">made the hard way</h3>
        <h2 className="font-normal text-2xl">top trending products</h2>
      </div>
      <div>
        <ul className="grid grid-cols-4 gap-5 ">{productItem}</ul>
      </div>
    </section>
  );
};

export default ProductsList;
