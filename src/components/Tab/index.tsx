import {  useState } from "react";
import { Events, Programs } from "..";
import Image from "next/image";

export function Tab() {
    const [selectedTab, setSelectedTab] = useState('event');
  
    const handleTabClick = (tabName: string) => {
      setSelectedTab(tabName);
    };
  
    return (
      <div>
        <div className="lg:px-5 lg:container lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-2 text-3xl mb-10 font-medium text-green">
          <Image src={"/assets/icons/logo.png"} width={40} height={10} alt="logo"/>
          Event & Program
        </div>
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
      </div>
      
    );
  }