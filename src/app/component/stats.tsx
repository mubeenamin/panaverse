import Image from "next/image";

export default function Stats() {
  let statsItems = [
    { name: "Students", text: "5,000", link: "/user.svg" },
    { name: "Class", text: "1,000", link: "/box.svg" },
    { name: "Cities", text: "5", link: "/map.svg" },
  ];
  return (
    <main className="m-4 md:m-16 2xl:m-36">
      <div className="md:flex md:justify-center md:text-5xl mb-10 font-semibold text-3xl  ">
        <div className="border-l-4 border-red-600 pl-4">
          OUR STUDENTS ARE <div className="text-red-600">EXPANDING!</div>
        </div>
      </div>
      <div className="md:flex md:space-x-5 space-y-5 md:space-y-0">
        {statsItems.map((link) => (
          <div
            key={link.name}
            className="flex justify-between border border-black rounded-md py-8 shadow px-2 md:w-1/3"
          >
            <div className="flex flex-col">
              <span className="">{link.name}</span>
              <span className="text-2xl font-bold py-2">{link.text}</span>
            </div>
            <div>
              <Image
                src={link.link}
                alt="user"
                width={50}
                height={50}
                className="py-2"
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
