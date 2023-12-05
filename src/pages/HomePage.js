import { useRouteLoaderData } from "react-router-dom";
import Banner from "../components/Layout/Banner";
import Category from "../components/Layout/Category";
import ProductsList from "../components/Layout/ProductsList";
import Modal from "../components/Modal/Modal";
import MoreInfo from "../components/Layout/MoreInfo";
import Footer from "../components/Layout/Footer";
import LiveChatModal from "../components/Modal/LiveChatModal";
import LiveChatItem from "../components/boxchat/LiveChatItem";

const HomePage = () => {
  //Lấy mảng các sản phẩm từ API
  const products = useRouteLoaderData("home-loader");

  return (
    <>
      <div className="relative">
        <Modal />
        <Banner />
        <Category />
        <ProductsList products={products} />
        <MoreInfo />
        <LiveChatItem />
        <LiveChatModal />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

// Gọi hàm để yêu cầu http để lấy data của products
export const loader = async () => {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  if (!response.ok) throw new Error("Something went wrong!");

  return response;
};
