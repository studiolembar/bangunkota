import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ButtonSlider } from "..";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function Programs() {
    const programItems = [
      {
        image: "/assets/images/programs/Program1.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah.",
      },
      {
        image: "/assets/images/programs/Program2.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah.",
      },
      {
        image: "/assets/images/programs/Program3.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah.",
      },
      {
        image: "/assets/images/programs/Program4.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah.",
      },
    ];
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
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
      <div className="lg:px-5 lg:container lg:mx-auto">
        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={
            <ButtonSlider
              next={function (): void {}}
              previous={function (): void {}}
            />
          }
          renderButtonGroupOutside={true}
          className="pb-10"
        >
          {programItems.map((item, index) => (
            <div
              key={index}
              className="card lg:h-52 card-side w-11/12 bg-base-100 shadow-md border border-base-300 shadow-neutral-400 mx-auto font-poppins"
            >
              <figure className="mr-2 w-full">
                <Image
                  src={item.image}
                  width={500}
                  height={300}
                  className="w-full h-full"
                  alt="Program"
                />
              </figure>
              <div className="card-body p-1">
                <h2 className="card-title text-lg">{item.title}</h2>
                <p className="text-sm">{item.desc}</p>
                <div className="card-actions justify-end m-1">
                  <a className="bg-yellow hover:bg-yellow-light hover:cursor-pointer py-2 text-base-100 font-semibold px-4 rounded-lg text-sm">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <Link
          href={"/events"}
          className="flex items-center gap-2 justify-center lg:justify-end mt-5 lg:mr-5"
        >
          <div className="text-green text-sm">Lihat semua</div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-green"
            size={"sm"}
          />
        </Link>
      </div>
    </section>
  );
}
