import { Outlet } from "react-router-dom";

import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="bg-primary-50 p-3 lg:px-10">
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};
