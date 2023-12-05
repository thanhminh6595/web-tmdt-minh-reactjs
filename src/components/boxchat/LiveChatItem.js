import { useDispatch } from "react-redux";
import { productActions } from "../../store/product-store";

//biểu tượng messenger
const LiveChatItem = () => {
  const dispatch = useDispatch();

  //Hàm click ẩn/ hiện live chat.
  const clickShowLiveChat = () => {
    dispatch(productActions.showLiveChat());
  };

  return (
    <div className="fixed right-10 bottom-64 z-50 ">
      <button onClick={clickShowLiveChat}>
        <i className="fa-brands fa-facebook-messenger fa-beat-fade fa-2xl"></i>
      </button>
    </div>
  );
};

export default LiveChatItem;
