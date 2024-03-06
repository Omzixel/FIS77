import { useState, FC, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import React from "react";

import { cn } from "@/lib/utils";

interface IProps {
  chooseTheme: (isLightTheme: boolean) => void;
  isLightTheme: boolean;
  setCssTheme: (className: string) => void;
  className: string;
}

const Navbar: FC<IProps> = ({
  chooseTheme,
  isLightTheme,
  setCssTheme,
  className,
}) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`flex w-full items-center px-10 py-2 gap-12 justify-center theme-${className}-main theme-${className}-text`}
    >
      <img className="w-14 rounded-xl" src="../../public/logo.jpg" alt="" />
      <NavigationMenu>
        <NavigationMenuList className="flex w-full justify-around">
          <NavigationMenuItem
            className={`theme-${className}-main theme-${className}-text`}
          >
            <Link to="/">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/" && "border-b-2 border-red-500"
                )}
              >
                POČETNA
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                location.pathname === "/about" && "border-b-2 border-red-500"
              )}
            >
              TKO JE PS-77
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/about" title="O nama">
                  Pogledajte vise datalja o nasoj firmi.
                </ListItem>
                <ListItem href="/team" title="Nas team">
                  Nas team se sastoji od 20+ developera.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/products">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/products" &&
                    "border-b-2 border-red-500"
                )}
              >
                PROIZVODI
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/contact">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  location.pathname === "/contact" &&
                    "border-b-2 border-red-500"
                )}
              >
                KONTAKT
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <label
        id="toggleMode"
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          checked={isLightTheme}
          onChange={(e) => {
            const newTheme = !isLightTheme;
            localStorage.setItem("theme", JSON.stringify(newTheme));
            chooseTheme(newTheme);
            setCssTheme(newTheme ? "light" : "dark");
          }}
          className="sr-only"
        />
        <div
          title="Dark/Light Mode"
          className={`w-14 h-7 bg-gray-300 rounded-full shadow-inner focus:outline-none relative dark:bg-gray-700 transition duration-300 ease-in-out`}
        >
          <div
            className={`absolute w-7 h-7 bg-white rounded-full shadow-md transform transition duration-300 ease-in-out ${
              isLightTheme ? "translate-x-0" : "translate-x-7"
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
