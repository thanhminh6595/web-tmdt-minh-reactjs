import { Outlet } from "react-router-dom";
import MainNavigation from "../components/Layout/MainNavigation";

const RootPage = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
    </>
  );
};

export default RootPage;
