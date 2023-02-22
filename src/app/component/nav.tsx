"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";

export default function NavBar() {
  let mainMenu = [
    { name: "Home", link: "/" },
    { name: "Course", link: "/courses" },
    { name: "About us", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [navbar, setNavbar] = useState(false);
  const handleNav = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <div className="flex">
          <Image src={"/logo01.png"} height={50} width={50} alt="footer-logo" />
          <div className="text-white text-xl flex items-end ">Panavers Dao</div>
        </div>

        <ul className="hidden md:flex">
          {mainMenu.map((link) => (
            <li key={link.name} className="p-4 hover:border-b-2 hover:border-red-600 cursor-pointer">
             <Link href={link.link}> {link.name}</Link>
            </li>
          ))}
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {navbar ? (
            <Image src={"/redclose.svg"} width="30" height={"30"} alt="logo" />
          ) : (
            <Image
              src={"/hamburger-red.svg"}
              width="30"
              height={"30"}
              alt="logo"
              className="focus:border-none active:border-none"
            />
          )}
        </div>
        <ul
          className={
            navbar
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <div className="flex pt-6">
          <Image src={"/logo01.png"} height={50} width={50} alt="footer-logo" />
          <div className="text-white text-xl flex items-end ">Panavers Dao</div>
        </div>
          {mainMenu.map((link) => (
            <li key={link.name} className="p-4 border-b-2 border-gray-500">
              <Link href={link.link}> {link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
