import { ScrollRestoration, Outlet, useNavigate } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import { NavigationBar } from "./NavigationBar";
import { Footer } from "./Footer";

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <NextUIProvider
      navigate={navigate}
      className="min-h-screen bg-primary-100 p-3 lg:px-10"
    >
      <ScrollRestoration />
      <NavigationBar />
      <Outlet />
      <Footer />
    </NextUIProvider>
  );
};
