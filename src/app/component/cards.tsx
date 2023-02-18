import Image from "next/image";
import Link from "next/link";

export default function Cards() {
  let cardItems = [
    { name: "Quarter I", text: "Web 3 & Metaverse", link: "/" },
    { name: "Quarter II", text: "Artificial Intelligence", link: "/" },
    { name: "Quarter III", text: "Cloud-Native Computing", link: "/" },
    { name: "Quarter IV", text: "Ambient Computing and IoT", link: "/" },
  ];
  return (
    <main className="m-4 md:m-16 2xl:m-36 mt-16 space-y-8 ">
      <div className="md:flex md:justify-center md:text-5xl font-semibold text-3xl">
        <div className="inline-flex border-l-4 border-red-600 pl-4">
          OUR <div className="text-red-600 pl-2"> PROGRAMS</div>
        </div>
      </div>
      <div>
        <Image
          src={"/arrow.svg"}
          alt="arrow logo"
          height={"50"}
          width={"50"}
          className="animate-bounce m-auto"
        />
      </div>
      <div className="md:flex space-y-8 md:space-y-0 md:space-x-4 ">
        {cardItems.map((link) => (
          <div
            key={link.name}
            className=" group border-2 p-8 md:w-1/2 md:py-12 shadow-lg cursor-pointer hover:shadow-red-600 transition ease-in delay-150 hover:-translate-y-1 hover:scale-100 duration-300 rounded-md"
          >
            <Link href={link.link}>
              <span className="flex justify-center text-4xl transition duration-500 ease-in-out group-hover:opacity-0">
                {link.name}
              </span>
              <span className=" flex justify-center text-2xl transition duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                {link.text}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
