import Image from "next/image";
import Carousel from 'react-multi-carousel';

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
    ];
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
      }
    };
    return (
      <section className="px-5 lg:px-0 font-poppins mb-20">
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
          <div className="my-10">
            <Carousel
              responsive={responsive}
              additionalTransfrom={1000}
              arrows={false}
              autoPlay
              autoPlaySpeed={2000}
              customTransition="all 3s linear"
              draggable
              focusOnSelect={false}
              infinite
              pauseOnHover={false}
              rewind={false}
              rewindWithAnimation={false}
              slidesToSlide={1}
              transitionDuration={0.1}
            >
              {clientItems.map((item, index) => (
                <div key={index}>
                  <Image
                    src={item.url}
                    width={150}
                    height={0}
                    alt="client"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    );
}