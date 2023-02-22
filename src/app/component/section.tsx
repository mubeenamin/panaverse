"use client";
import Image from "next/image";
import Link from "next/link";
import Typed from "react-typed";
export default function MainSection() {
  return (
    <main className="w-full ">
      <div className="m-4 grid md:grid-cols-2 space-y-8 md:justify-between md:items-center md:max-w-[1240px] md:mx-auto md:space-y-0 md:py-24 md:space-x-14 ">
      <div>
        <div className=" md:text-5xl mb-10 font-semibold text-3xl  ">
          <div className="border-l-4 border-red-600 pl-4">
            LEARN STATE OF THE ART{" "}
            <div>
            <Typed
              strings={["TECHNOLOGY"]}
              typeSpeed={120}
              backSpeed={120}
              loop
              className="text-red-600"
            />
            </div>
          </div>
        </div>
        <p className=" md:text-justify  md:text-xl md:mt-10 2xl:text-2xl">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and more
        </p>
      </div>
      <div className="md:basis-1/2 md:shadow-2xl">
        <Image
          width={1000}
          height={500}
          alt="back ground"
          src={"/web 3.jpg"}
          className="rounded-lg  opacity-100 w-auto"
        />
      </div>
      </div>
    </main>
  );
}
