"use client";
import Quarter1 from "../(quarters)/quarter1/page";
import { Tab } from "@headlessui/react";
import Quarter2 from "../(quarters)/quarter2/page";
import Quarter3 from "../(quarters)/quarter3/page";
import Quarter4 from "../(quarters)/quarter4/page";

export default function Course() {
  let quarter = [
    {
      name: "Quarter 1",
      course: <Quarter1 />,
    },
    {
      name: "Quarter 2",
      course: <Quarter2 />,
    },
    {
      name: "Quarter 3",
      course: <Quarter3 />,
    },
    {
      name: "Quarter 4",
      course: <Quarter4 />,
    },
  ];
  return (
    <main className="flex max-w-[1240px] mx-auto">
      <Tab.Group>
        <div className="md:flex">
          <Tab.List className="flex space-x-4 md:space-x-0 w-[50%] md:flex-col text-lg md:w-fit pt-4  md:space-y-4 ">
            {quarter.map((ans) => (
              <Tab
                key={ans.name}
                className="py-4 px-4 rounded-t-lg md:rounded-r-none ui-selected:bg-white ui-not-selected:bg-gray-500 md:rounded-l-lg shadow-2xl ui-selected:border-l-4 ui-selected:border-red-600"
              >
                {ans.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {quarter.map((ans1) => (
              <Tab.Panel key={ans1.name}>{ans1.course}</Tab.Panel>
            ))}
          </Tab.Panels>
        </div>
      </Tab.Group>
    </main>
  );
}
