import Image from "next/image";
import Link from "next/link";
import Button from "./button";
export default function MainSection() {
  return (
    <main className=" md:flex py-20 md:space-x-20">
      <div className="">
        <div className="text-3xl mb-5 text-transparent: uppercase font-bold text-red-700 text-opacity-70">
          Learn State of the Art Technology
        </div>
        <p className=" md:text-justify text-2xl">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and more
        </p>
        <div className="py-6">
        <Button><Link href={"https://www.google.com/"}>Get started</Link></Button>
        </div>
      </div>
      <div>
        <Image
          width={"3000"}
          height="1000"
          alt="back ground"
          src={"/web 3.jpg"}
          className="rounded-lg md:shadow-xl"
        />
      </div>
    </main>
  );
}
