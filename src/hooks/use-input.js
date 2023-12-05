import { useState } from "react";

const useInput = (validateValue) => {
  // Khai báo các biến state liên quan
  const [enteredValue, setEnterValue] = useState("");
  const [enteredValueIsValid, setEnteredValueIsValid] = useState(false);
  const [enteredValueIsTouched, setEnteredValueIsTouched] = useState(false);

  // Khai báo biến bị lỗi
  const enteredValueHasError = !enteredValueIsValid && enteredValueIsTouched;

  // Khai báo biến liên quantới style css
  const classIsInValid = enteredValueHasError && "bg-gray-200 text-black";

  // Xử lý hàm khi thay đổi giá trị input
  const changeInputValueHandler = (event) => {
    setEnterValue(event.target.value);

    // Kiểm tra điều kiện
    if (validateValue(event.target.value)) {
      setEnteredValueIsValid(true);
    } else {
      setEnteredValueIsValid(false);
    }
  };

  // Xử lý hàm khi click vào input
  const blurInputValueHandler = () => {
    setEnteredValueIsTouched(true);
    validateValue(enteredValue)
      ? setEnteredValueIsValid(true)
      : setEnteredValueIsValid(false);
  };

  return {
    enteredValue,
    enteredValueHasError,
    classIsInValid,
    changeInputValueHandler,
    blurInputValueHandler,
    enteredValueIsValid,
  };
};

export default useInput;
