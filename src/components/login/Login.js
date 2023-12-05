import { NavLink, useNavigate } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import useInput from "../../hooks/use-input";
import { useState } from "react";

const Login = () => {
  // gọi useNavigate để chuyển hướng trang
  const navigate = useNavigate();
  // Lấy báo danh sách người dùng ở localstorage
  const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];
  // Tạo biến state để lưu thông tin của form login
  const [checkLogin, setCheckLogin] = useState(true);

  // Lấy các giá trị trả về từ custom hook input
  const {
    enteredValue: enteredEmail,
    enteredValueHasError: enteredEmailHasError,
    blurInputValueHandler: blurInputEmailHandler,
    changeInputValueHandler: changeInputEmailHandler,
    classIsInValid: classEmailIsInValid,
    enteredValueIsValid: enteredEmailIsValid,
  } = useInput((value) => value.includes("@"));

  // Lấy các giá trị trả về từ custom hook input
  const {
    enteredValue: enteredPassword,
    enteredValueHasError: enteredPasswordHasError,
    blurInputValueHandler: blurInputPasswordHandler,
    changeInputValueHandler: changeInputPasswordHandler,
    classIsInValid: classPasswordIsInValid,
    enteredValueIsValid: enteredPasswordIsValid,
  } = useInput((value) => value.trim().length > 8);

  const submitFormIsValid = enteredEmailIsValid && enteredPasswordIsValid;

  // Hàm xử lý khi click submit button
  const submitLoginHandler = (event) => {
    event.preventDefault();

    if (!enteredEmailIsValid || !enteredPasswordIsValid) return null;

    const userData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    // kiểm tra điều kiện khi người dùng nhập đúng email và password đã đăng ký trước đó
    if (
      userArr.some(
        (user) =>
          user.email === userData.email && user.password === userData.password
      )
    ) {
      // Chuyển trang đến trang home và lưu giá trị người dùng hiện tại khi nhập đúng email và pass
      setCheckLogin(true);
      localStorage.setItem("currentUser", JSON.stringify(userData));
      navigate("/");
    } else {
      // Hiển thị lỗi sai ra cho ngươi fdùng biết
      setCheckLogin(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl relative">
      <div className="w-full">
        <img
          src={banner1}
          alt={banner1}
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="mx-auto max-w-2xl w-full rounded-xl shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 bg-white -translate-y-1/2">
        <div className="p-10">
          <form className="mb-20" onSubmit={submitLoginHandler}>
            <h1 className="text-center italic text-3xl font-light mb-20">
              Sign In
            </h1>
            <div className="mb-10">
              <div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="absolute top-1/2 -translate-y-1/2 left-5 text-xl text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    value={enteredEmail}
                    onChange={changeInputEmailHandler}
                    onBlur={blurInputEmailHandler}
                    className={`pr-3 pl-36 text-xl focus:outline-none w-full border-s border-e border-t border-solid border-gray-300 h-16 ${classEmailIsInValid}`}
                  />
                </div>
                {enteredEmailHasError && (
                  <p className="mt-3 mb-5 text-red-500">
                    Please enter your email!
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="absolute top-1/2 -translate-y-1/2 left-5 text-xl text-gray-500"
                  >
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    id="password"
                    value={enteredPassword}
                    onChange={changeInputPasswordHandler}
                    onBlur={blurInputPasswordHandler}
                    className={`pr-3 pl-36 text-xl focus:outline-none w-full border border-solid border-gray-300 h-16 ${classPasswordIsInValid}`}
                  />
                </div>
                {enteredPasswordHasError && (
                  <p className="mt-3 mb-5 text-red-500">
                    Your password must be larger 8 character!
                  </p>
                )}
              </div>
              {!checkLogin && (
                <p className="mt-3 mb-5 text-red-500">
                  Email or Password was wrong!
                </p>
              )}
            </div>

            <div
              className={`text-white py-2 ${
                submitFormIsValid ? " bg-black" : " bg-gray-300"
              }`}
            >
              <button
                className={`w-full h-10 uppercase text-lg ${
                  submitFormIsValid ? " cursor-pointer" : " cursor-not-allowed"
                }`}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center italic text-base">
            <div className="text-gray-400 mr-3">Create an account?</div>
            <NavLink to="/register">
              <button className="text-blue-500">Sign up</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
