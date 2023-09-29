import Image from "next/image";
import Carousel from 'react-multi-carousel';

export function Client(){
    const clientItems = [
      { url: "/assets/images/clients/governments/Government1.png" },
      { url: "/assets/images/clients/governments/Government2.png" },
      { url: "/assets/images/clients/governments/Government3.png" },
      { url: "/assets/images/clients/governments/Government4.png" },
      { url: "/assets/images/clients/business/Business1.png" },
      { url: "/assets/images/clients/business/Business2.png" },
      { url: "/assets/images/clients/business/Business3.png" },
      { url: "/assets/images/clients/business/Business4.png" },
      { url: "/assets/images/clients/business/Business5.png" },
      { url: "/assets/images/clients/business/Business6.png" },
      { url: "/assets/images/clients/business/Business7.png" },
      { url: "/assets/images/clients/business/Business8.png" },
      { url: "/assets/images/clients/academics/Academic1.png" },
      { url: "/assets/images/clients/academics/Academic2.png" },
      { url: "/assets/images/clients/academics/Academic3.png" },
      { url: "/assets/images/clients/media/Media1.png" },
      { url: "/assets/images/clients/media/Media2.png" },
      { url: "/assets/images/clients/media/Media3.png" },
    ];
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
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
        <h1 className="text-center text-5xl mb-10">Collaborators</h1>
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
            pauseOnHover
            rewind={false}
            rewindWithAnimation={false}
            slidesToSlide={1}
            transitionDuration={0.1}
          >
            {clientItems.map((item, index) => (
              <div key={index} className="grayscale hover:grayscale-0">
                <Image
                  src={item.url}
                  className="w-20 h-16 lg:w-28 lg:h-20"
                  width={150}
                  height={0}
                  alt="client"
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    );
}