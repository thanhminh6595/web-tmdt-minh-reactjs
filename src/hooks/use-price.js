const usePrice = () => {
  const priceFunction = (value) => {
    //Xử lý thêm dấu chấm gữa các hàng đơn vị, nghìn, triệu của PRICE
    const a = value.toString().trim().slice(-9, -6);
    const b = value.toString().trim().slice(-6, -3);
    const c = value.toString().trim().slice(-3);
    const price = [a, b, c].join(".");
    return price;
  };
  return { priceFunction };
};

export default usePrice;
