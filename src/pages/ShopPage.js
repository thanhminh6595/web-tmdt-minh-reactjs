import BannerShop from "../components/shop/BannerShop";
import CategoryShop from "../components/shop/CategoryShop";

const ShopPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <BannerShop />
      <CategoryShop />
    </div>
  );
};

export default ShopPage;
