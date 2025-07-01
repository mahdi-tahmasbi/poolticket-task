"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const headerMenu = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Submit Form", href: "/submit" },
];

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleHamMenu = () => {
    setIsOpenMenu((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex flex-row-reverse justify-between items-center px-4 py-3 md:py-4">
        <Link href={"/"} className="text-xl font-bold">
          PoolTicket
        </Link>

        {/* دکمه باز کردن منو موبایل */}
        <button onClick={handleHamMenu} className="block md:hidden">
          <Menu className="w-6 h-6" />
        </button>

        {/* منوی دسکتاپ */}
        <ul className="hidden md:flex space-x-4">
          {headerMenu.map(({ id, name, href }) => (
            <li key={id}>
              <Link
                href={href}
                className="px-3 py-1 rounded hover:bg-gray-200 transition"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* منوی موبایل با انیمیشن */}
      <AnimatePresence>
        {isOpenMenu && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col px-4 space-y-2 pb-4 overflow-hidden"
          >
            {headerMenu.map(({ id, name, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  className="block px-3 py-2 rounded bg-gray-100 hover:bg-gray-200 transition"
                  onClick={() => setIsOpenMenu(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
