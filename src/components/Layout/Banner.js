import { NavLink } from "react-router-dom";
import bannerImg from "../../assets/banner1.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative max-w-7xl mx-auto">
        <img
          src={bannerImg}
          alt="banner-img"
          className="w-full h-full object-cover"
        />
        <div className="italic uppercase absolute top-1/2 -translate-y-1/2 pl-12">
          <p className="text-gray-400">New inspiration 2020</p>
          <h1 className="text-4xl my-4 font-normal w-4/5 leading-tight">
            20 % off on new season
          </h1>
          <NavLink to="/shop">
            <button className="bg-black text-white py-2 px-5 italic text-xl font-thin">
              Browse collections
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Banner;
