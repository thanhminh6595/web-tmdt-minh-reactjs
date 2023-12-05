import usePrice from "../../hooks/use-price";
import useInput from "../../hooks/use-input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BillDetail = () => {
  const navigate = useNavigate();
  // Kiểm tra thỏa mãn điều kiện thì hiển thị cho người dùng biết đã order thành công
  const [checkOrder, setCheckOrder] = useState(false);
  const [timing, setTiming] = useState("...");

  // Gọi giá trị FullName từ custom hook input
  const {
    enteredValue: enteredFullName,
    enteredValueHasError: enteredFullNameHasError,
    blurInputValueHandler: blurInputFullNameHandler,
    changeInputValueHandler: changeInputFullNameHandler,
    classIsInValid: classFullNameIsInValid,
  } = useInput((value) => value.includes(" "));

  // Gọi giá trị email từ custom hook input
  const {
    enteredValue: enteredEmail,
    enteredValueHasError: enteredEmailHasError,
    blurInputValueHandler: blurInputEmailHandler,
    changeInputValueHandler: changeInputEmailHandler,
    classIsInValid: classEmailIsInValid,
  } = useInput((value) => value.includes("@"));

  // Gọi giá trị phone từ custom hook input
  const {
    enteredValue: enteredPhoneNumber,
    enteredValueHasError: enteredPhoneNumberHasError,
    blurInputValueHandler: blurInputPhoneNumberHandler,
    changeInputValueHandler: changeInputPhoneNumberHandler,
    classIsInValid: classPhoneNumberIsInValid,
  } = useInput((value) => value.trim() !== "");

  // Gọi giá trị address từ custom hook input
  const {
    enteredValue: enteredAddress,
    enteredValueHasError: enteredAddressHasError,
    blurInputValueHandler: blurInputAddressHandler,
    changeInputValueHandler: changeInputAddressHandler,
    classIsInValid: classAddressIsInValid,
  } = useInput((value) => value.trim() !== "");

  // Gọi sản phẩm được lưu từ localstorage
  const productArr = JSON.parse(localStorage.getItem("product") ?? []);
  // Gọi custom hook price -> thêm dấu phân tách giữa các đơn vị
  const { priceFunction } = usePrice();

  // Gọi giá trị tổng tiền của giỏ hàng
  const amountReduce = productArr.reduce((sumVal, currentVal) => {
    return (sumVal += currentVal.amount);
  }, 0);
  // Thêm dấu phân tách giữa các đơn vị
  const totalAmount = priceFunction(amountReduce);

  // Gọi hàm placeOrder
  const submitPlaceOrderHandler = (event) => {
    event.preventDefault();

    // Validate
    if (
      !enteredFullName ||
      !enteredEmail ||
      !enteredPhoneNumber ||
      !enteredAddress
    )
      return null;

    setCheckOrder(true);

    // Nếu thỏa điều kiện, khi nhấn nút order sau 3 giây trang sẽ chuyển đến HOME PAGE
    setTimeout(() => {
      setTiming(3);
    }, 1000);
    setTimeout(() => {
      setTiming(2);
    }, 2000);
    setTimeout(() => {
      setTiming(1);
    }, 3000);
    setTimeout(() => {
      navigate("/");
    }, 4000);
    setTimeout(() => {
      // xóa dữ liệu của sản phẩm trong giỏ hàng
      localStorage.removeItem("product");
    }, 6000);
  };

  // Hiển thị lại your order để người dùng kiểm tra
  const orderItem = productArr.map((product) => {
    const price = priceFunction(product.price);

    return (
      <div key={product._id.$oid}>
        <li className="grid grid-cols-2 gap-3 py-1 border-b border-gray-300 mb-4">
          <h1 className="font-medium">{product.name}</h1>
          <p className="text-gray-500 ml-auto self-center">
            {price} VND x {product.quantity}
          </p>
        </li>
      </div>
    );
  });
  return (
    <>
      <h1 className="uppercase mt-10 italic text-2xl mb-10">Billing Details</h1>
      <div className="grid grid-cols-2/1 gap-5 mb-20">
        <div>
          {/* FORM */}
          <form onSubmit={submitPlaceOrderHandler}>
            <div className="italic mb-5">
              <label className="uppercase" htmlFor="fullName">
                Full Name:
              </label>
              <input
                id="fullName"
                value={enteredFullName}
                onChange={changeInputFullNameHandler}
                onBlur={blurInputFullNameHandler}
                placeholder="Enter Your Full Name Here!"
                className={`w-full h-10 focus:outline-none border-solid border border-gray-300 text-black pl-2 mt-2 ${classFullNameIsInValid}`}
              />
              {enteredFullNameHasError && (
                <p className="mt-3 text-red-500">
                  Please enter your full name!
                </p>
              )}
            </div>

            <div className="italic mb-5">
              <label className="uppercase" htmlFor="email">
                Email:
              </label>
              <input
                value={enteredEmail}
                onChange={changeInputEmailHandler}
                onBlur={blurInputEmailHandler}
                id="email"
                placeholder="Enter Your Email Here!"
                className={`w-full h-10 focus:outline-none border-solid border border-gray-300 text-black pl-2 mt-2 ${classEmailIsInValid}`}
              />
              {enteredEmailHasError && (
                <p className="mt-3 text-red-500">Please enter your email!</p>
              )}
            </div>
            <div className="italic mb-5">
              <label className="uppercase" htmlFor="phonenumber">
                Phone Number:
              </label>
              <input
                id="phonenumber"
                value={enteredPhoneNumber}
                onChange={changeInputPhoneNumberHandler}
                onBlur={blurInputPhoneNumberHandler}
                placeholder="Enter Your Phone Number Here!"
                className={`w-full h-10 focus:outline-none border-solid border border-gray-300 text-black pl-2 mt-2 ${classPhoneNumberIsInValid}`}
              />
              {enteredPhoneNumberHasError && (
                <p className="mt-3 text-red-500">
                  Please enter your phone number!
                </p>
              )}
            </div>
            <div className="italic mb-5">
              <label className="uppercase" htmlFor="address">
                Address:
              </label>
              <input
                id="address"
                value={enteredAddress}
                onChange={changeInputAddressHandler}
                onBlur={blurInputAddressHandler}
                placeholder="Enter Your Phone Number Here!"
                className={`w-full h-10 focus:outline-none border-solid border border-gray-300 text-black pl-2 mt-2 ${classAddressIsInValid}`}
              />
              {enteredAddressHasError && (
                <p className="mt-3 text-red-500">Please enter your address!</p>
              )}
            </div>
            <button className="text-xl italic text-gray-100 py-2 px-5 bg-black">
              Place Order
            </button>
            {checkOrder && (
              <p className="text-green-600 italic mt-5">
                Order successfully. Go to Home page... ({timing})
              </p>
            )}
          </form>
        </div>
        {/* YOUR ORDER */}
        <div className="bg-gray-100 p-10 italic self-start">
          <div className="uppercase text-2xl tracking-wider mb-10">
            Your Order
          </div>
          <ul className="mb-10">{orderItem}</ul>
          <div className="flex justify-between items-center ">
            <h1 className="font-medium text-2xl uppercase">Total</h1>
            <p className="text-2xl">{totalAmount} VND</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillDetail;
