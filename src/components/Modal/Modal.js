import ProductItem from "../Layout/ProductItem";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/product-store";

const Popup = () => {
  // Gọi action từ store khi click vào nút để xử lý hầm close poppup
  const dispatch = useDispatch();
  const clickCloseHandler = () => {
    dispatch(productActions.show());
  };
  return (
    <>
      <div className="bg-white z-50 w-full h-fit top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 fixed max-w-4xl p-5">
        <div
          className="cursor-pointer absolute right-3 top-2"
          onClick={clickCloseHandler}
        >
          <i className="fa-solid fa-rectangle-xmark"></i>
        </div>
        <ProductItem />
      </div>
    </>
  );
};

const Overlay = () => {
  const dispatch = useDispatch();
  const clickCloseHandler = () => {
    dispatch(productActions.show());
  };

  return (
    <div
      className="bg-black z-40 opacity-80 w-full h-screen top-0 fixed"
      onClick={clickCloseHandler}
    ></div>
  );
};

const Modal = () => {
  // Gọi biến show ở store-> biến này true or false khi click
  const show = useSelector((state) => state.reducer.showPopup);

  const elementPortal = document.getElementById("popup");
  return (
    <>
      {show && ReactDOM.createPortal(<Overlay />, elementPortal)}
      {show && ReactDOM.createPortal(<Popup />, elementPortal)}
    </>
  );
};

export default Modal;
