import { ScrollRestoration, Outlet, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate} className="bg-primary-50 p-3 lg:px-10">
      <ScrollRestoration />
      <NavigationBar />
      <Outlet />
      <Footer />
    </NextUIProvider>
  );
};
