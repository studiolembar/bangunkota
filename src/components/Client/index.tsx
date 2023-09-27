import Image from "next/image";

export function Client(){
    const clientItems = [
      {
        name: "Government",
        image: [
            { url: "/assets/images/clients/governments/Government1.png" }, 
            { url: "/assets/images/clients/governments/Government2.png" }, 
            { url: "/assets/images/clients/governments/Government3.png" }, 
            { url: "/assets/images/clients/governments/Government4.png" }, 
        ],
      },
      {
        name: "Business",
        image: [
            { url: "/assets/images/clients/business/Business1.png" }, 
            { url: "/assets/images/clients/business/Business2.png" }, 
            { url: "/assets/images/clients/business/Business3.png" }, 
            { url: "/assets/images/clients/business/Business4.png" }, 
            { url: "/assets/images/clients/business/Business5.png" }, 
            { url: "/assets/images/clients/business/Business6.png" }, 
            { url: "/assets/images/clients/business/Business7.png" }, 
            { url: "/assets/images/clients/business/Business8.png" }, 
        ],
      },
      {
        name: "Academic",
        image: [
            { url: "/assets/images/clients/academics/Academic1.png" }, 
            { url: "/assets/images/clients/academics/Academic2.png" }, 
            { url: "/assets/images/clients/academics/Academic3.png" }, 
        ],
      },
      {
        name: "Media",
        image: [
            { url: "/assets/images/clients/media/Media1.png" }, 
            { url: "/assets/images/clients/media/Media2.png" }, 
            { url: "/assets/images/clients/media/Media3.png" }, 
        ],
      },
    ];
    return (
      <section className="font-poppins mb-20">
        <h1 className="text-4xl my-3 font-medium">Clients</h1>
        {clientItems.map((item, index) => (
        <div key={index} className="my-10">
          <h2 className="text-3xl mb-2 font-medium text-green">{item.name}</h2>
          <hr className="my-4 text-base-300" />
          <div className="flex gap-4">
            {item.image.map((item, index) => (
              <div key={index} className="grayscale hover:grayscale-0">
                <Image
                  src={item.url}
                  className="w-20 h-16"
                  width={200}
                  height={0}
                  alt="client"
                />
              </div>
            ))}
          </div>
        </div>
        ))}
      </section>
    );
}