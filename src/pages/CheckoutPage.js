import BannerCheckout from "../components/checkout/BannerCheckout";
import BillDetail from "../components/checkout/BillDetail";

const CheckoutPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <BannerCheckout />
      <BillDetail />
    </div>
  );
};

export default CheckoutPage;
