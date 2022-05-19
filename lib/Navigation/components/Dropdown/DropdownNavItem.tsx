import { useNavigationOpen } from "../../NavigationContext";
import React, { useEffect, useRef } from "react";
import { NavItem } from "../../types";
import { NavigationModulDropdownContainer } from "./NavigationModulDropdownContainer";
import useIsActive from "../../helper/useIsActive";
import NavigationItemBase from "../NavItem/NavigationItemBase";

type NavigationDropdownProps = {
  items?: NavItem[];
  id: string;
};

const DropdownNavItem: React.FC<NavigationDropdownProps> = (props) => {
  const { children, items, id } = props;
  const hasItems = items && items.length > 0;

  const { open, setOpen } = useNavigationOpen(id);
  const { active } = useIsActive({ items });

  const [bottom, setBottom] = React.useState<number>(0);
  const [target, setTarget] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const ref = useRef<HTMLButtonElement>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if ("ontouchstart" in window) return;

    checkButtonPosition();
    setOpen(id);
    return false;
  };
  const handleMouseLeave = () => setOpen(null);

  const handleNavClick = () => {
    if (open) {
      return setOpen(null);
    }
    setOpen(id);
    checkButtonPosition();
    return false;
  };

  const checkButtonPosition = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.bottom !== bottom) {
        setBottom(rect.bottom);
      }
      if (rect.bottom !== target.y || rect.left + rect.width / 2 !== target.x) {
        setTarget({ x: rect.left + rect.width / 2, y: rect.bottom });
      }
    }
  };

  if (!hasItems) return null;

  return (
    <>
      <button
        id={id}
        aria-haspopup={true}
        aria-expanded={open}
        className="leading-none"
        type="button"
        ref={ref}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleNavClick}
        data-testid={"DropdownNavItem_" + id}
      >
        <NavigationItemBase
          active={active}
          props={props}
          place="dropdown"
          icon
          hover={open}
        >
          {children}
        </NavigationItemBase>
      </button>
      <NavigationModulDropdownContainer
        ref={wrapRef}
        handleMouseLeave={handleMouseLeave}
        handleMouseEnter={handleMouseEnter}
        show={open}
        items={items}
        targetX={target.x}
        targetY={target.y}
      />
    </>
  );
};

export default DropdownNavItem;
