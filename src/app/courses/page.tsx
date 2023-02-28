"use client";
import Quarter1 from "../(quarters)/quarter1/page";
import { Tab } from "@headlessui/react";
import Quarter2 from "../(quarters)/quarter2/page";
import Quarter3 from "../(quarters)/quarter3/page";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join("");
}

export default function Course() {
  return (
    <main className="flex max-w-[1240px] mx-auto">
      
        <Tab.Group>
          <div className="md:flex">
            <Tab.List className="flex space-x-4 md:space-x-0 w-[50%] md:flex-col text-lg md:w-fit pt-4  md:space-y-4 ">
              <Tab className="py-4 px-4 rounded-t-lg md:rounded-r-none ui-selected:bg-white ui-not-selected:bg-gray-500 md:rounded-l-lg shadow-2xl">
                Quarter 1
              </Tab>
              <Tab className="py-4 px-4 rounded-t-lg md:rounded-r-none ui-selected:bg-white ui-not-selected:bg-gray-500 md:rounded-l-lg shadow-2xl">
                Quarter 2
              </Tab>
              <Tab className="py-4 px-4 rounded-t-lg md:rounded-r-none ui-selected:bg-white ui-not-selected:bg-gray-500 md:rounded-l-lg shadow-2xl">
                Quarter 3
              </Tab>
            </Tab.List>
            
            <Tab.Panels>
              <Tab.Panel>
                <Quarter1 />
              </Tab.Panel>
              <Tab.Panel >
                <Quarter2 />
              </Tab.Panel>
              <Tab.Panel>
                <Quarter3 />
              </Tab.Panel>
            </Tab.Panels>
           
          </div>
        </Tab.Group>
      
    </main>
  );
}
