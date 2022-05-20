/* eslint-disable @next/next/no-img-element */
import { useAppContext } from "@components/AppContext";
import { Logo } from "@components/Layout/Logo";
import Link from "@components/Link";
import Svg from "@components/Svg";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import { LangSwitch } from "@lib/LangSwitcherService/LangSwitch";
import { HeaderNavigation } from "@lib/Navigation";
import NavigationMobile from "@lib/Navigation/NavigationMobile";
import clsx from "clsx";
import React from "react";
import { Squash as Hamburger } from "hamburger-react";
import Burger from "./Burger";
import BookingButton from "@components/BookingButton";
const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = useAppContext();
  const navItems = data?.navigation;
  const langSwitchData = data?.langSwitchData;
  const scrolled = useScrollThreshold(300);

  const headerColor = data?.header?.color;
  const hideLogo = data?.header?.withOutLogo;

  return (
    <>
      <nav>
        <div
          className={clsx(
            "flex items-center justify-between w-full  transition-colors pl-5 ",
            {
              "text-white": headerColor !== "black" && !scrolled && !open,
              "bg-white bg-opacity-80 text-black": scrolled,
              " text-black": open,
            }
          )}
        >
          <Link aria-label="Home" href="/">
            {(!hideLogo || scrolled) && <Logo />}
          </Link>
          <div className="flex">
            <HeaderNavigation
              items={navItems || []}
              className="items-center justify-center hidden  menu:flex "
            />

            <BookingButton className="hidden  menu:flex" />
            <button
              data-testid="menu-overlay-toggle text-red"
              onClick={() => setOpen((s) => !s)}
              aria-label={"Open the menu"}
              aria-expanded={open}
              className="menu:hidden mr-2 w-10 h-10  relative"
            >
              <Burger open={open} />
            </button>
          </div>
        </div>
      </nav>
      <NavigationMobile
        items={navItems}
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      >
        {/* <LangSwitch
          slugs={langSwitchData}
          onClick={() => {
            setOpen(false);
          }}
        /> */}

        <BookingButton onClick={() => setOpen(false)} />
      </NavigationMobile>
    </>
  );
};

export default Nav;
