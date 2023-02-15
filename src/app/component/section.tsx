import Image from "next/image";
import Link from "next/link";
import Button from "./button";
export default function MainSection() {
  return (
    <main className="bg-white md:flex py-28 md:space-x-28">
      <div className="md:py-10 md:items-center">
        <div className="text-3xl mb-5 text-transparent: uppercase font-bold text-red-700 text-opacity-70">
          
          Learn State of the Art Technology
        </div>
        <p className=" text-justify">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and more
        </p>
        <Button><Link href={"https://www.google.com/"}>Get started</Link></Button>
      </div>
      <div className="py-10 h-auto w-auto md:flex md:items-center ">
        <Image
          width={"1500"}
          height="300"
          alt="back ground"
          src={"/web 3.jpg"}
          className="rounded-lg shadow"
        />
      </div>
    </main>
  );
}
