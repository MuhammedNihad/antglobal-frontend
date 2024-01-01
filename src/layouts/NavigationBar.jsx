import { useState } from "react";
import { MagnifyingGlass } from "phosphor-react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  Link,
  Input,
} from "@nextui-org/react";

import logo from "../assets/logo.webp";

/**
 * Renders the navigation bar component.
 *
 * @return {JSX.Element} The rendered navigation bar.
 */
export const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Profile", "My Settings", "Help & Feedback", "Log Out"];

  return (
    <div className="p-3 lg:px-10">
      <Navbar
        height="5rem"
        maxWidth="xl"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="rounded-3xl bg-accent-200"
        classNames={{
          wrapper: ["px-4"],
        }}
      >
        <NavbarContent className="gap-2 md:gap-3" justify="end">
          <NavbarMenuToggle
            className="md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand className="gap-3">
            <img
              src={logo}
              alt="Ant Global Logo"
              width={60}
              height={60}
              className="flex min-w-[50px]"
            />
            <p className="hidden text-xl font-bold uppercase text-inherit md:flex">
              Ant Global
            </p>
          </NavbarBrand>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[30rem] h-10 md:h-12",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-secondary-200 rounded-xl lg:rounded-2xl dark:bg-secondary-300/",
            }}
            placeholder="Search for products..."
            size="sm"
            startContent={<MagnifyingGlass size={18} />}
            type="search"
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};
