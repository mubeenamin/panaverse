 "use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./button";

export default function NavBar() {
  let mainMenu = [
    { name: "Home", link: "/" },
    { name: "Course", link: "/" },
    { name: "About us", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10" >
        <div className="justify-between px-4 mx-auto  md:items-center md:flex ">
          <div>
            <div className=" flex items-center justify-between py-3 md:py-5 md:block ">
              <Image src={"/logo01.png"} height={"50"} width="50" alt="logo" />
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:broder"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src={"/redclose.svg"}
                      width="30"
                      height={"30"}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src={"/hamburger-red.svg"}
                      width="30"
                      height={"30"}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
            navbar ? "p-12 md:p-0 block" : "hidden"
          }`}
        >
          <ul className="h-screen md:h-auto items-center justify-center md:flex ">
            {mainMenu.map((link) => (
              <li
                key={link.name}
                className="pb-6 text-xl text-red-600 py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900 md:hover:text-red-900 md:hover:bg-transparent"
              >
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}



