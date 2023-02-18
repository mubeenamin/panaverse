import Image from "next/image";
import Link from "next/link";
import Button from "./button";
export default function MainSection() {
  return (
    <main className="space-y-8 md:space-y-0 md:flex py-20 md:space-x-20">
      <div className="">
      <div className=" md:text-5xl mb-10 font-semibold text-3xl  ">
        <div className="border-l-4 border-red-600 pl-4">
          LEARN STATE OF THE ART <div className="text-red-600">TECHNOLOGY</div>
        </div>
      </div>
        <p className=" md:text-justify  md:text-2xl md:mt-10">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and more
        </p>
        
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
