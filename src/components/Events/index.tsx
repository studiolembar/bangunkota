import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Events(){
    const imageItems = [
        {image: "/assets/images/events/Events1.jpg"},
        {image: "/assets/images/events/Events2.jpg"},
        {image: "/assets/images/events/Events3.jpg"},
        {image: "/assets/images/events/Events4.jpg"},
    ]
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
      <section className="my-20">
        <Carousel responsive={responsive}>
          {imageItems.map((item, index) => (
            <div key={index} className="">
              <figure className="max-h-72 w-80 rounded-lg image-full">
                <Image src={item.image} width={280} height={200} className="rounded-lg" alt="event" />
              </figure>
            </div>
          ))}
        </Carousel>
      </section>
    );
}