import {  useState } from "react";
import { Events, Programs } from "..";

export function Tab() {
    const [selectedTab, setSelectedTab] = useState('event');
  
    const handleTabClick = (tabName: string) => {
      setSelectedTab(tabName);
    };
  
    return (
      <div className="lg:px-5 lg:container lg:mx-auto">
        <h1 className="px-5 lg:px-0 text-3xl my-3 font-medium font-poppins">
          Events & Programs
        </h1>
        <div className="flex justify-center gap-4 font-poppins mt-10">
          <button
            className={`border border-green hover:bg-green hover:text-base-100 w-28 h-10 rounded-full font-medium ${
              selectedTab === "event" ? "bg-green text-base-100" : ""
            }`}
            onClick={() => handleTabClick("event")}
          >
            Event
          </button>
          <button
            className={`border border-green hover:bg-green hover:text-base-100 w-28 h-10 rounded-full font-medium ${
              selectedTab === "program" ? "bg-green text-base-100" : ""
            }`}
            onClick={() => handleTabClick("program")}
          >
            Program
          </button>
        </div>

        {selectedTab === "event" ? <Events /> : <Programs />}
      </div>
    );
  }