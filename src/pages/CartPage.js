import BannerCart from "../components/cart/BannerCart";
import ProductsListCart from "../components/cart/ProductsListCart";

const CartPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <BannerCart />
      <ProductsListCart />
    </div>
  );
};

export default CartPage;
