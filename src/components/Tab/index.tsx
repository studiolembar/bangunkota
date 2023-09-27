import {  useState } from "react";
import { Events, Programs } from "..";

export function Tab() {
    const [selectedTab, setSelectedTab] = useState('event');
  
    const handleTabClick = (tabName: string) => {
      setSelectedTab(tabName);
    };
  
    return (
      <div>
        <h1 className="text-4xl my-3 font-medium font-poppins">Events & Programs</h1>
        <div className="flex justify-center gap-4 font-poppins mt-10">
          <button
            className={`border border-green hover:bg-green hover:text-base-100 w-28 h-10 rounded-full font-medium ${
              selectedTab === 'event' ? 'bg-green text-base-100' : ''
            }`}
            onClick={() => handleTabClick('event')}
          >
            Event
          </button>
          <button
            className={`border border-green hover:bg-green hover:text-base-100 w-28 h-10 rounded-full font-medium ${
              selectedTab === 'program' ? 'bg-green text-base-100' : ''
            }`}
            onClick={() => handleTabClick('program')}
          >
            Program
          </button>
        </div>
  
        {/* Tampilkan konten yang sesuai dengan tab yang dipilih */}
        {selectedTab === 'event' ? <Events /> : <Programs />}
      </div>
    );
  }