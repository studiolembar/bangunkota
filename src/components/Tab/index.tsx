import {  useState } from "react";
import { Events, Programs } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export function Tab() {
    const [selectedTab, setSelectedTab] = useState('event');
  
    const handleTabClick = (tabName: string) => {
      setSelectedTab(tabName);
    };
  
    return (
      <div>
        <div className="lg:px-5 lg:container lg:mx-auto">
        <div className="flex gap-2 px-5 lg:px-0">
          <FontAwesomeIcon icon={faCalendarDays} size={"2x"} color="rgb(51 65 85)"/>
          <h1 className="text-3xl font-medium font-poppins"> Events & Programs</h1>
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