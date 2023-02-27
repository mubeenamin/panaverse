import Link from "next/link";

export default function SideBar() {
  let sideBarItems = [
    { item: "Quarter I", link: "/quarter1" },
    { item: "Quarter II", link: "/quarter2" },
    { item: "Quarter III", link: "/quarter3" },
    { item: "Quarter IV", link: "/quarter4" },
  ];

  return (
    <main>
      
        <div className="hidden px-4 md:block md:border-r-4 md:shadow-black  md:py-6 md:space-y-6 md:max-h-fit ">
            
          {sideBarItems.map((links) => (
            <div
              key={links.item}
              className=" text-2xl p-3 mx-auto w-[60%] hover:border-l-2 hover:border-red-600 hover:transition hover:duration-700 cursor-pointer md:border-l-2 md:border-grey-800"
            >
              <Link href={links.link}>{links.item}</Link>
            </div>
          ))}
        </div>
      
    </main>
  );
}
