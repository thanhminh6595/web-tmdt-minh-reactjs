import avatar from "../../assets/10. 3x4minh.png";

// Màn hình live chat
const LiveChatBox = () => {
  return (
    <div className="w-full">
      <div className="shadow-slate-500 drop-shadow-xl rounded-xl bg-white">
        <div className="flex justify-between items-center w-full border-b border-solid border-gray-200 py-5 px-5">
          <h1 className="font-bold text-xl">Customer Support</h1>
          <div className="bg-gray-100 px-3 py-1">
            <button className="italic hover:bg-gray-50">Let's Chat App</button>
          </div>
        </div>
        <div className="w-96 my-5 pb-20 pl-2 pr-10 italic">
          <div className=" bg-blue-400 mb-3 rounded-md w-fit ml-auto">
            <p className="p-2 text-white ">Xin chào!</p>
          </div>
          <div className=" bg-blue-400 mb-3 rounded-md w-fit ml-auto">
            <p className="p-2 text-white ">Làm thế nào để xem các sản phẩm?</p>
          </div>
          <div className="grid grid-cols-1/8 gap-3 mb-3">
            <img
              className="w-10 h-10 object-cover rounded-1/2"
              src={avatar}
              alt={avatar}
            />
            <p className="text-gray-500 p-2 mr-auto bg-gray-50">
              ADMIN: Chào bạn!
            </p>
          </div>
          <div className="grid grid-cols-1/8 gap-3 mb-3">
            <img
              className="w-10 h-10 object-cover rounded-1/2"
              src={avatar}
              alt={avatar}
            />
            <p className="text-gray-500 p-2 mr-auto bg-gray-50">
              ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm.
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center bg-gray-100 py-5 px-5 rounded-b-xl">
          <div className="w-10 h-10 mr-3">
            <img
              className="w-full h-full object-cover rounded-1/2"
              src={avatar}
              alt={avatar}
            />
          </div>
          <input
            type="text"
            placeholder="Enter Message!"
            className="focus:outline-none mr-3"
          />
          <button>
            <i className="fa-solid fa-paperclip mr-3"></i>
          </button>
          <button>
            <i className="fa-solid fa-face-smile mr-3"></i>
          </button>
          <button>
            <i className="fa-solid fa-paper-plane text-blue-500 mr-3"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiveChatBox;
