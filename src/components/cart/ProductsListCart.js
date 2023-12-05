import { NavLink } from "react-router-dom";
import usePrice from "../../hooks/use-price";
import { useState } from "react";

const ProductsListCart = () => {
  // Gọi custom hook price -> thêm dấu phân tách giữa các đơn vị
  const { priceFunction } = usePrice();
  const productArr = JSON.parse(localStorage.getItem("product")) ?? [];

  // Định nghĩa state để khi set state -> sẽ đánh giá lại toàn bộ component
  const [updateProductArr, setUpdateProductArr] = useState(productArr);

  // Tính tổng giá trị đơn hàng.
  const amountReduce = productArr.reduce((sumVal, currentVal) => {
    return (sumVal += currentVal.amount);
  }, 0);
  // Gọi custom hook price -> thêm dấu phân tách giữa các đơn vị
  const totalAmount = priceFunction(amountReduce);

  const bodyItem =
    // Kiểm tra có sản phẩm trong giỏ hàng không?
    updateProductArr &&
    updateProductArr.map((product) => {
      // Gọi custom hook price -> thêm dấu phân tách giữa các đơn vị
      const price = priceFunction(product.price);
      const amount = priceFunction(product.amount);

      // Xử lý giảm số lượng của đơn hàng
      const clickDecreamentHandler = () => {
        // Tìm phần tử trong mảng có id trùng với id của sản phẩm
        const indexId = updateProductArr.findIndex(
          (value) => value._id.$oid === product._id.$oid
        );

        // Sản phẩm mới đã được updated sau khi click vào tăng sốlượng
        const newProduct = {
          ...updateProductArr[indexId],
          quantity: updateProductArr[indexId].quantity - 1,
          amount:
            updateProductArr[indexId].amount -
            1 * updateProductArr[indexId].price,
        };

        let newArray = updateProductArr;

        // Kiểm tra nếu số lượng sản phẩm dưới 1 -> đồng nghĩa với việc xóa sản phẩm đó ra khỏi mảng các sản phẩm trong giỏ hàng
        if (newProduct.quantity < 1) {
          newArray.splice(indexId, 1);
          localStorage.setItem("product", JSON.stringify(newArray));
          setUpdateProductArr([...newArray]);

          // Kiểm tra nếu số lượng sản phẩm thỏa mãn điều kiện-> thay thế sản phẩm cũ bằng sản phẩm mới đã được điều chỉnh vào mảng các sản phẩm trong giỏ hàng
        } else {
          newArray[indexId] = newProduct;
          localStorage.setItem("product", JSON.stringify(newArray));
          setUpdateProductArr([...newArray]);
        }
      };

      // Xử lý tăng số lượng của đơn hàng
      const clickIncreamentHandler = () => {
        const indexId = updateProductArr.findIndex(
          (value) => value._id.$oid === product._id.$oid
        );

        // Sản phẩm mới đã được updated sau khi click vào giảm sốlượng
        const newProduct = {
          ...updateProductArr[indexId],
          quantity: updateProductArr[indexId].quantity + 1,
          amount:
            updateProductArr[indexId].amount +
            1 * updateProductArr[indexId].price,
        };

        let newArray = updateProductArr;

        // Kiểm tra nếu số lượng sản phẩm trên 10 -> đồng nghĩa với việc không thể thêm sản phẩm vào giỏ hàng nữa (đây là điều kiện tùy theo mục đích của khách hàng)
        if (newProduct.quantity > 10) {
          return null;
        } else {
          // Kiểm tra nếu số lượng sản phẩm thỏa mãn điều kiện-> thay thế sản phẩm cũ bằng sản phẩm mới đã được điều chỉnh vào mảng các sản phẩm trong giỏ hàng
          newArray[indexId] = newProduct;
          localStorage.setItem("product", JSON.stringify(newArray));
          setUpdateProductArr([...newArray]);
        }
      };

      // Xử lý xóa sản phẩm trong đơn hàng
      const clickRemoveHandler = () => {
        // Xác nhận 1 lần nữa
        const confirmRemove = window.confirm("Are you sure?");
        if (confirmRemove) {
          const indexId = updateProductArr.findIndex(
            (value) => value._id.$oid === product._id.$oid
          );

          let newArray = updateProductArr;
          // Xóa sản phẩm đó ra khỏi giỏ hàng
          newArray.splice(indexId, 1);
          // Cập nhật lại giỏ hàng và lưu lại vào storage
          localStorage.setItem("product", JSON.stringify(newArray));
          // Sau khi dùng lệnh này toàn bộ component sẽ được đánh giá lại -> UI cũng sẽ thay đổi -> UI sản phẩm sẽ được xóa khỏi giỏ hàng
          setUpdateProductArr([...newArray]);
        } else return null;
      };

      // Hiển thị danh sách sản phẩm giỏ hàng
      return (
        <tr key={product._id.$oid}>
          <td className="text-center p-4 w-2/15">
            <img
              src={product.img1}
              alt={product.name}
              className="w-32 h-32 object-cover"
            />
          </td>
          <td className="text-center p-4 font-medium text-xl w-1/3">
            {product.name}
          </td>
          <td className="text-center p-4 w-2/15 text-gray-400">{price} VND</td>
          <td className="text-center p-4 w-2/15">
            <div className="flex justify-between items-center">
              <button onClick={clickDecreamentHandler}>
                <i className="fa-solid fa-caret-left"></i>
              </button>
              <div className="not-italic">{product.quantity}</div>
              <button onClick={clickIncreamentHandler}>
                <i className="fa-solid fa-caret-right"></i>
              </button>
            </div>
          </td>
          <td className="text-center p-4 w-2/15 text-gray-400">{amount} VND</td>
          <td className="text-center p-4 w-2/15">
            <button onClick={clickRemoveHandler}>
              <i className="fa-solid fa-trash text-gray-400"></i>
            </button>
          </td>
        </tr>
      );
    });

  return (
    <div className="my-10">
      <h1 className="uppercase mt-10 italic text-2xl mb-10">Shopping Cart</h1>
      <div className="grid grid-cols-2/1 gap-5 italic ">
        <div>
          {(!productArr || productArr.length === 0) && (
            <p className="mb-20">No found product in your cart</p>
          )}
          {productArr && productArr.length !== 0 && (
            <table className="w-full">
              <thead className="bg-gray-100 ">
                <tr className="uppercase font-">
                  <th className="font-medium py-5 text-gray-600 text-center">
                    IMAGE
                  </th>
                  <th className="font-medium py-5 text-gray-600 text-center">
                    product
                  </th>
                  <th className="font-medium py-5 text-gray-600 text-center">
                    price
                  </th>
                  <th className="font-medium py-5 text-gray-600 text-center">
                    quantity
                  </th>
                  <th className="font-medium py-5 text-gray-600 text-center">
                    total
                  </th>
                  <th className="font-medium py-5 text-gray-600 text-center">
                    remove
                  </th>
                </tr>
              </thead>
              {/* Hiển thị danh sách sản phẩm giỏ hàng */}
              <tbody>{bodyItem}</tbody>
            </table>
          )}
          <div className="bg-gray-100 py-5 ">
            <div className="flex justify-between items-center px-5 py-3">
              <NavLink to="/shop?mode=all">
                <button className="flex justify-between items-center border-gray-600 px-5">
                  <span className="font-bold text-3xl">←</span>
                  <p className="text-xl ml-3 italic text-gray-500 tracking-wider ">
                    Continue Shopping
                  </p>
                </button>
              </NavLink>
              <NavLink to={`${productArr.length === 0 ? "" : "/checkout"}`}>
                <button className="flex justify-between items-center border-solid border-2 border-gray-600 px-5 py-1">
                  <p className="text-xl mr-3 italic text-gray-500 tracking-wider">
                    Proceed to checkout
                  </p>
                  <span className="font-bold text-3xl">→</span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        {/* Hiển thị tổng số tiền của đơn hàng */}
        <div className="bg-gray-100">
          <div className="p-10">
            <h1 className="mb-10 uppercase text-3xl">Cart Total</h1>
            <div className="flex justify-between items-center border-solid border-b border-gray-400 pb-3 mb-3">
              <h1 className="uppercase text-xl">Sub total</h1>
              <div className="text-gray-400 text-lg">
                {amountReduce && totalAmount} VND
              </div>
            </div>
            <div className="flex justify-between items-center mb-10">
              <h1 className="uppercase text-xl">total</h1>
              <div className="text-xl">{amountReduce && totalAmount} VND</div>
            </div>
            <form>
              <input
                type="text"
                placeholder="Enter your coupon"
                className="w-full h-10 border border-solid border-gray-400 focus:outline-none pl-3"
                required
              ></input>
              <button className="bg-black text-white w-full py-3 ">
                <span>Apply coupon</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListCart;
