"use client";
import React from "react";
import { motion } from "motion/react";
import { createPortal } from "react-dom";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [dropdownPosition, setDropdownPosition] = React.useState({ top: 0, left: 0 });
  const menuItemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (active === item && menuItemRef.current) {
      const rect = menuItemRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 20,
        left: rect.left + rect.width / 2
      });
    }
  }, [active, item]);

  return (
    <div ref={menuItemRef} onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-black"
      >
        {item}
      </motion.p>
      {active === item && children && typeof window !== 'undefined' && createPortal(
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          style={{
            position: 'fixed',
            top: dropdownPosition.top,
            left: 0,
            right: 0,
            width: '100vw',
            zIndex: 1000
          }}
        >
          <motion.div
            transition={transition}
            layoutId="active"
            className="overflow-hidden w-full"
          >
            <motion.div
              layout
              className="h-full w-full"
            >
              {children}
            </motion.div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative bg-white flex space-x-4 px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto rounded-lg shadow-md"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </a>
  );
};
