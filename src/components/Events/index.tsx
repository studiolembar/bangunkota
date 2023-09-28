import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ButtonSlider } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Events(){
    const imageItems = [
        {image: "/assets/images/events/Events1.jpg"},
        {image: "/assets/images/events/Events2.jpg"},
        {image: "/assets/images/events/Events3.jpg"},
        {image: "/assets/images/events/Events4.jpg"},
        {image: "/assets/images/events/Events5.jpg"},
    ]
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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return (
      <section className="my-20 font-poppins">
        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={<ButtonSlider next={function (): void {}} previous={function (): void {}} />}
          renderButtonGroupOutside={true}
        >
          {imageItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={item.image}
                width={280}
                height={200}
                className="w-64 h-72 rounded-lg"
                alt="event"
              />
            </div>
          ))}
        </Carousel>
        <Link href={"/events"} className="flex items-center gap-2 justify-center lg:justify-end mt-5 lg:mr-5">
          <div className="text-green text-sm">Lihat semua</div>
            <FontAwesomeIcon icon={faArrowRight} className="text-green" size={"sm"} />
        </Link>
      </section>
    );
}