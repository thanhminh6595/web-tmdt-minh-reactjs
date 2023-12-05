import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MainNavigation = () => {
  // gọi hook chuyển trang
  const navigate = useNavigate();
  // khai báo biến sử dụng hiuệu ứng thanh cuộn trang
  const [isScroll, setIsScroll] = useState(false);
  // Kiểm tra có tài khoản login chưa
  const [isLogin, setIsLogin] = useState(false);
  // Khai báo biến người dùng hiện tại
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) ?? [];
  // Khai báo danh sách người dùng đã đăng ký
  const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];

  // Kiểm tra danh sách người dùng có hay không?
  const infoUserCurrent =
    userArr && userArr.filter((user) => user.email === currentUser.email);

  // Xử lý logout, sau khi logout xóa sản phẩm trong giỏ hàng và người dùng hiện tại khỏi localstorage, sau đó chuyển hướng đến trang login
  const clickLogoutHandler = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("product");
    setIsLogin(false);
    navigate("/login");
  };

  useEffect(() => {
    // Scroll
    window.addEventListener("scroll", (event) => {
      if (window.scrollY > 150) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });

    // Kiểm tra, xử lý người dùng đã đăng nhập hay chưa
    if (currentUser.email) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [currentUser.email]);

  // Nên thay thế các hàm này bằng attribute có sẵn của NavLink (Việc làm thế này bởi vì thực hiện theo yêu cầu bài asm3 đưa ra là chuyển trang bằng useNavigate)
  const homeHandler = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const shopHandler = (event) => {
    event.preventDefault();
    navigate("/shop");
  };
  const cartHandler = (event) => {
    event.preventDefault();
    navigate("/cart");
  };
  const loginHandler = (event) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div
      className={`flex justify-between items-center duration-500 italic text-base mx-auto max-w-7xl py-3 px-2 fixed w-full z-30 left-1/2 -translate-x-1/2 ${
        isScroll ? "bg-gray-200 opacity-95" : "bg-white"
      }`}
    >
      <div>
        <ul className=" flex justify-between items-center">
          <li className="mr-3 list-none hover:text-orange-400 ">
            <NavLink
              // to="/"
              // className={({ isActive }) => (isActive ? "text-orange-400" : "")}
              onClick={homeHandler}
            >
              Home
            </NavLink>
          </li>
          <li className="mr-3 list-none hover:text-orange-400 ">
            <NavLink
              // to="/shop"
              // className={({ isActive }) => (isActive ? "text-orange-400" : "")}
              onClick={shopHandler}
            >
              Shop
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl">BOUTIQUE</h1>
      </div>
      <div>
        <ul className=" flex justify-between items-center">
          <li className="mr-5 hover:text-orange-400">
            <NavLink
              // to="/cart"
              className="flex items-center"
              onClick={cartHandler}
            >
              <i className="fa-solid fa-cart-shopping mr-1"></i>
              <p>Cart</p>
            </NavLink>
          </li>
          {!isLogin && (
            <li className="mr-5 hover:text-orange-400">
              <NavLink
                // to="/login"
                className="flex items-center"
                onClick={loginHandler}
              >
                <i className="fa-solid fa-user mr-1"></i>
                <p>Login</p>
              </NavLink>
            </li>
          )}
          {isLogin && (
            <li className="mr-5 hover:text-orange-400">
              <NavLink className="flex items-center" to="">
                <i className="fa-solid fa-user mr-1"></i>
                <p className="hover:text-orange-400 mr-1">
                  {infoUserCurrent[0].fullname}
                </p>
                <i className="fa-solid fa-square-caret-down"></i>
              </NavLink>
            </li>
          )}
          {isLogin && (
            <li>
              <NavLink to="/login" onClick={clickLogoutHandler}>
                <p className="hover:text-orange-400">(Logout)</p>
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default MainNavigation;
