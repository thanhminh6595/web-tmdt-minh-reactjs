import { NavLink, useNavigate } from "react-router-dom";
import banner1 from "../../assets/banner1.jpg";
import useInput from "../../hooks/use-input";
import { useState } from "react";

const Register = () => {
  // Gọi biến kiểm tra có bị trùng email hay không và chuyển trang
  const [uniqueEmail, setUniqueEmail] = useState(false);
  const navigate = useNavigate();

  // Lấy các biến trả về từ custom hook input
  const {
    enteredValue: enteredFullName,
    enteredValueHasError: enteredFullNameHasError,
    classIsInValid: classFullNameIsInValid,
    blurInputValueHandler: blurInputFullNameHandler,
    changeInputValueHandler: changeInputFullNameHandler,
    enteredValueIsValid: enteredFullNameIsValid,
  } = useInput((value) => value.trim().includes(" "));

  // Lấy các biến trả về từ custom hook input
  const {
    enteredValue: enteredEmail,
    enteredValueHasError: enteredEmailHasError,
    classIsInValid: classEmailIsInValid,
    blurInputValueHandler: blurInputEmailHandler,
    changeInputValueHandler: changeInputEmailHandler,
    enteredValueIsValid: enteredEmailIsValid,
  } = useInput((value) => value.trim().includes("@"));

  // Lấy các biến trả về từ custom hook input
  const {
    enteredValue: enteredPassword,
    enteredValueHasError: enteredPasswordHasError,
    classIsInValid: classPasswordIsInValid,
    blurInputValueHandler: blurInputPasswordHandler,
    changeInputValueHandler: changeInputPasswordHandler,
    enteredValueIsValid: enteredPasswordIsValid,
  } = useInput((value) => value.trim().length > 8);

  // Lấy các biến trả về từ custom hook input
  const {
    enteredValue: enteredPhone,
    enteredValueHasError: enteredPhoneHasError,
    classIsInValid: classPhoneIsInValid,
    blurInputValueHandler: blurInputPhoneHandler,
    changeInputValueHandler: changeInputPhoneHandler,
    enteredValueIsValid: enteredPhoneIsValid,
  } = useInput((value) => value.trim().length !== 0);

  // Xử lý sự kiện submit đăng ký
  const submitRegisterHandler = (event) => {
    event.preventDefault();

    // Kiểm tra nếu không có điều kiện thỏa mãn thì return null
    if (
      !enteredFullNameIsValid ||
      !enteredEmailIsValid ||
      !enteredPasswordIsValid ||
      !enteredPhoneIsValid
    )
      return null;

    // ngược lại nếu thỏa điều kiện thì lưu mảng danh sách người dùng đăng ký
    const userData = {
      fullname: enteredFullName,
      email: enteredEmail,
      password: enteredPassword,
      phone: enteredPhone,
    };

    // Kiểm tra đã có email trùng với danh sách trước đó chưa
    const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];
    if (userArr.some((user) => user.email === userData.email)) {
      setUniqueEmail(true);
    } else {
      // Nếu đăng ký thành công -> chuyển đến trang login và lưu danh sách người dùng đăng ký thành công
      setUniqueEmail(false);
      userArr.push(userData);
      localStorage.setItem("userArr", JSON.stringify(userArr));
      navigate("/login");
    }
  };

  const submitFormIsValid =
    enteredFullNameIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredPhoneIsValid;

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
          <form className="mb-20" onSubmit={submitRegisterHandler}>
            <h1 className="text-center italic text-3xl font-light mb-20">
              Sign Up
            </h1>
            <div className="mb-10">
              <div>
                <div className="relative">
                  <label
                    htmlFor="fullname"
                    className="absolute top-1/2 -translate-y-1/2 left-5 text-xl text-gray-500"
                  >
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    id="fullname"
                    type="text"
                    value={enteredFullName}
                    onChange={changeInputFullNameHandler}
                    onBlur={blurInputFullNameHandler}
                    className={`pr-3 pl-36 text-xl focus:outline-none w-full border-s border-e border-t border-solid border-gray-300 h-16 ${classFullNameIsInValid}`}
                  />
                </div>
                {enteredFullNameHasError && (
                  <p className="mt-3 mb-5 text-red-500">
                    Please enter your full name!
                  </p>
                )}
              </div>

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
                    className={`pr-3 pl-36 text-xl focus:outline-none w-full border-s border-e border-t border-solid border-gray-300 h-16 ${classEmailIsInValid} ${
                      uniqueEmail ? "bg-gray-200 text-black" : ""
                    }`}
                  />
                </div>
                {enteredEmailHasError && (
                  <p className="mt-3 mb-5 text-red-500">
                    Please enter your email!
                  </p>
                )}
                {uniqueEmail ? (
                  <p className="mt-3 mb-5 text-red-500">
                    Email exist. Let's enter another email!
                  </p>
                ) : (
                  ""
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
                    className={`pr-3 pl-36 text-xl focus:outline-none w-full border-s border-e border-t border-solid border-gray-300 h-16 ${classPasswordIsInValid}`}
                  />
                </div>
                {enteredPasswordHasError && (
                  <p className="mt-3 mb-5 text-red-500">
                    Your password must be larger 8 character!
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="absolute top-1/2 -translate-y-1/2 left-5 text-xl text-gray-500"
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="phone"
                    id="phone"
                    value={enteredPhone}
                    onChange={changeInputPhoneHandler}
                    onBlur={blurInputPhoneHandler}
                    className={`pr-3 pl-36 text-xl focus:outline-none w-full border border-solid border-gray-300 h-16 ${classPhoneIsInValid}`}
                  />
                </div>
                {enteredPhoneHasError && (
                  <p className="mt-3 mb-5 text-red-500">
                    Please enter your phone number!
                  </p>
                )}
              </div>
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
            <div className="text-gray-400 mr-3">Login?</div>
            <NavLink to="/login">
              <button className="text-blue-500">Click</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
