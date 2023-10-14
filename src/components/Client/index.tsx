import Image from "next/image";

export function Client(){
    const clientItems = [
      { url: "/assets/images/clients/kolaborator-1.png" },
      { url: "/assets/images/clients/kolaborator-2.png" },
      { url: "/assets/images/clients/kolaborator-3.png" },
      { url: "/assets/images/clients/kolaborator-4.png" },
      { url: "/assets/images/clients/kolaborator-5.png" },
      { url: "/assets/images/clients/kolaborator-6.png" },
      { url: "/assets/images/clients/kolaborator-7.png" },
      { url: "/assets/images/clients/kolaborator-8.png" },
      { url: "/assets/images/clients/kolaborator-9.png" },
      { url: "/assets/images/clients/kolaborator-10.png" },
      { url: "/assets/images/clients/kolaborator-11.png" },
      { url: "/assets/images/clients/kolaborator-12.png" },
      { url: "/assets/images/clients/kolaborator-13.png" },
      { url: "/assets/images/clients/kolaborator-14.png" },
      { url: "/assets/images/clients/kolaborator-15.png" },
      { url: "/assets/images/clients/kolaborator-16.png" },
      { url: "/assets/images/clients/kolaborator-17.png" },
      { url: "/assets/images/clients/kolaborator-18.png" },
      { url: "/assets/images/clients/kolaborator-1.png" },
      { url: "/assets/images/clients/kolaborator-2.png" },
      { url: "/assets/images/clients/kolaborator-3.png" },
      { url: "/assets/images/clients/kolaborator-4.png" },
      { url: "/assets/images/clients/kolaborator-5.png" },
      { url: "/assets/images/clients/kolaborator-6.png" },
      { url: "/assets/images/clients/kolaborator-7.png" },
      { url: "/assets/images/clients/kolaborator-8.png" },
      { url: "/assets/images/clients/kolaborator-9.png" },
      { url: "/assets/images/clients/kolaborator-10.png" },
      { url: "/assets/images/clients/kolaborator-11.png" },
      { url: "/assets/images/clients/kolaborator-12.png" },
      { url: "/assets/images/clients/kolaborator-13.png" },
      { url: "/assets/images/clients/kolaborator-14.png" },
      { url: "/assets/images/clients/kolaborator-15.png" },
      { url: "/assets/images/clients/kolaborator-16.png" },
      { url: "/assets/images/clients/kolaborator-17.png" },
      { url: "/assets/images/clients/kolaborator-18.png" },
    ];
    return (
      <section className="font-poppins mb-20">
        <div className="lg:px-5 lg:container lg:mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-2 mb-10">
            <Image
              src={"/assets/icons/logo.png"}
              width={40}
              height={10}
              alt="logo"
            />
            <h1 className="text-3xl font-medium text-green text-center lg:text-left">
              Kolaborator Pentahelix
            </h1>
          </div>
        </div>
        <div className="slider">
            <div className="slide-track">
              {clientItems.map((item, index) => (
                <div key={index} className="slide">
                  <Image
                    src={item.url}
                    width={250}
                    height={100}
                    alt="client"
                  />
                </div>
              ))}
            </div>
          </div>
      </section>
    );
}