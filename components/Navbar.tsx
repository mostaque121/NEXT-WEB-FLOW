"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { AnimatePresence, motion } from "framer-motion";
import { Circle, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="dark:bg-[#03122f] fixed top-0 left-0 z-50 w-full bg-lightBackground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="relative h-10 w-36">
                <Image
                  src="/logo2.png"
                  fill
                  priority
                  alt="Logo"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-contain"
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-5 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-black dark:text-white rounded-md text-sm font-medium  ${
                    pathname === item.href
                      ? "bg-violet-200 dark:bg-violet-900"
                      : "hover:bg-violet-200 hover:dark:bg-violet-900 transition-all"
                  } `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <Link href={`${pathname}#contact-form`}>
              <div className="hidden md:block">
                <button className="bg-violet-500 hover:bg-transparent border border-violet-500 hover:border-violet-500 hover:text-violet-500  text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out">
                  Get Quote
                </button>
              </div>
            </Link>

            <ThemeToggle />
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex transition-all duration-200 ease-in-out items-center justify-center p-2 rounded-md text-violet-500 hover:dark:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Get Quote
              </button>
              <CircuitBoard />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function CircuitBoard() {
  return (
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <path
          d="M10,10 L90,10 L90,90 L10,90 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
        {[...Array(5)].map((_, i) => (
          <g key={i}>
            <Circle cx={20 + i * 15} cy={20} r="2" fill="currentColor" />
            <path
              d={`M${20 + i * 15},22 L${20 + i * 15},${40 + i * 10}`}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </g>
        ))}
        {[...Array(4)].map((_, i) => (
          <g key={i}>
            <Circle cx={80} cy={30 + i * 15} r="2" fill="currentColor" />
            <path
              d={`M78,${30 + i * 15} L${60 - i * 10},${30 + i * 15}`}
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
