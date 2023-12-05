import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import LiveChatBox from "../boxchat/LiveChatBox";
import { motion } from "framer-motion";

const LiveChat = () => {
  return (
    <>
      {/* Sử dụng framework motion */}
      <motion.div
        className={`fixed right-20 bottom-1/3 z-60 w-96`}
        animate={{
          opacity: [0, 0.5, 1, 1],
          scale: [0, 1, 1, 1],
          rotate: [0, -25, 10, 0],
        }}
        transition={{ duration: 1, times: [0, 0.3, 0.7, 1] }}
      >
        <LiveChatBox />
      </motion.div>
    </>
  );
};

const LiveChatModal = () => {
  const show = useSelector((state) => state.reducer.showLiveChat);

  const elementPortal = document.getElementById("live-chat");
  return <>{show && ReactDOM.createPortal(<LiveChat />, elementPortal)}</>;
};

export default LiveChatModal;
