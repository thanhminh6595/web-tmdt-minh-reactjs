import NavBarShop from "./NavBarShop";
import ProductsListShop from "./ProductsListShop";

const CategoryShop = () => {
  return (
    <>
      <div className="grid grid-cols-4 my-10">
        <NavBarShop />
        <ProductsListShop />
      </div>
    </>
  );
};
export default CategoryShop;
