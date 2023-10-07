import { faCar, faLeaf, faNewspaper, faRunning, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export function Values(){
    const communityItems = [
        {
          id: 1,
          name: "Art",
          icon: "/assets/icons/art.png",
        },
        {
          id: 2,
          name: "Creative",
          icon:  "/assets/icons/creative.png",
        },
        {
          id: 3,
          name: "Culture",
          icon: "/assets/icons/culture.png",
        },
        {
          id: 4,
          name: "Tourism",
          icon: "/assets/icons/tourism.png",
        },
        {
          id: 5,
          name: "Sustain",
          icon: "/assets/icons/sustain.png",
        },
      ];
    return (
      <section className="my-8 px-5 lg:px-0 font-poppins">
        <div className="lg:px-5 lg:container lg:mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-2 text-3xl mb-10 font-medium text-green">
            <Image
              src={"/assets/icons/logo.png"}
              width={40}
              height={10}
              alt="logo"
            />
            Our Values
          </div>
          <div className="grid grid-cols-3 items-center lg:grid-cols-5 gap-4 rounded-3xl bg-base-200">
            {communityItems.map((item) => (
              <div key={item.id} className="text-center rounded-md py-10">
                <div className="flex justify-center">
                  <Image
                    src={item.icon}
                    width={70}
                    height={50}
                    alt="community"
                  />
                </div>
                <p className="text-green text-lg font-semibold">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}