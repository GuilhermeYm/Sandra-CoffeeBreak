"use client";

import { Inter } from "next/font/google";
import { useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import Link from "next/link";

const inter = Inter({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export default function ToggleUI() {
  const [isListVisible, setIsListVisible] = useState(false);

  const handleToggle = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <>
      <div className="flex xl:hidden">
        <IoReorderThree className="text-5xl" onClick={handleToggle} />
      </div>
      <ul
        className={`py-8 px-5 gap-11 xl:flex ${
          isListVisible
            ? "absolute bg-backgroundHeaderNavSecondary flex w-full left-0 top-36 text-xl gap-4 transition-all duration-300 ease-linear"
            : "hidden"
        } items-center`}
      >
        <li
          id="da"
          className={`${inter.className} 2xl:text-4xl xl:text-2xl tracking-[5px]`}
        >
          <Link href={"#home"}>Home</Link>
        </li>
        <li
          id="da"
          className={`${inter.className} 2xl:text-4xl xl:text-2xl tracking-[5px]`}
        >
          <Link href={"#contact"}>Contato</Link>
        </li>
        <li
          id="da"
          className={`${inter.className}  tracking-[5px] 2xl:text-4xl xl:text-2xl`}
        >
          <Link href={"#aboutUs"}>Sobre nós</Link>
        </li>
        <li
          id="da"
          className={`${inter.className} tracking-[5px] 2xl:text-4xl xl:text-2xl`}
        >
          <Link href={"github.com/GuilhermeYm"}>Github</Link>
        </li>
      </ul>
    </>
  );
}
