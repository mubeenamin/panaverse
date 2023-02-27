
import Image from "next/image";

export default function Footer() {
  let footerMenu = [
    { name: "About us", link: "/" },
    { name: "Instructors", link: "/" },
    { name: "Testimonials", link: "/" },
    { name: "Build Career", link: "/" },
  ];
  let footerMenu1 = [
    { name: "Help Center", link: "/" },
    { name: "Terms of Service", link: "/" },
    { name: "Legal", link: "/" },
    { name: "Privacy Policy", link: "/" },
  ];
  let footerIcon = [
    { name: "FaceBook", link: "/facebook.svg" },
    { name: "LinkedIn", link: "/linkedin.svg" },
    { name: "Twitter", link: "/twitter.svg" },
  ];
  return (
    <main className=" bg-black w-full relative">
      <div className=" py-20 pl-4 pr-4 sm:pl-4 sm:pr-4 sm:w-full md:flex md:space-x-12 md:max-w-[1240px] md:mx-auto">
        <div className="md:basis-1/2">
          <div className="flex py-4 border-l-4 border-red-600 pl-4">
            <Image
              src={"/logo01.png"}
              height={50}
              width={50}
              alt="footer-logo"
            />
            <div className="text-white text-xl flex items-end ">
              Panavers Dao
            </div>
          </div>
          <div className=" text-white mt-2">
            The objective of this course is to teach participants to develop
            customer-facing planet-scale Websites, Full-Stack Apps and
            templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of
            the quarter, the participants will be able to develop and deploy web
            platforms like Facebook, Shopify, etc
          </div>
        </div>
        <div className="group mt-4 pl-4 pr-4 md:basis-1/6">
          <span className="text-xl text-white font-semibold group-hover:border-l-2 group-hover:border-red-600 pl-2">
            Company
          </span>
          {footerMenu.map((link) => (
            <div
              className="text-slate-400 mt-4 pl-2 hover:text-white cursor-pointer"
              key={link.name}
            >
              {link.name}
            </div>
          ))}
        </div>
        <div className="group mt-4 pl-4 pr-4 md:basis-1/6">
          <span className="text-xl text-white font-semibold group-hover:border-l-2 group-hover:border-red-600 pl-2">
            Support
          </span>
          {footerMenu1.map((link) => (
            <div
              className="text-slate-400 mt-4 pl-2 hover:text-white cursor-pointer"
              key={link.name}
            >
              {link.name}
            </div>
          ))}
        </div>
        <div className="group mt-4 pl-4 pr-4 md:basis-1/6">
          <span className="text-xl text-white font-semibold group-hover:border-l-2 group-hover:border-red-600 pl-2">
            Follow us
          </span>
          <div className="flex md:flex-col 2xl:flex">
            {footerIcon.map((link) => (
              <div
                className="text-slate-400 mt-4 pl-2 hover:text-white cursor-pointer"
                key={link.name}
              >
                <Image src={link.link} height={40} width={40} alt="icons" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex text-white font-semibold justify-center bg-slate-500 p-2"> Developed and Designed by Mubeen Ameen 
      <div>
        <Image src={"/icon.svg"} width={30} height={30} alt="avatar" className="ml-5 rounded-full "/>
      </div>
      </div>
    </main>
  );
}
