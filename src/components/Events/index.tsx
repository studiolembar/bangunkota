import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ButtonSlider } from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export function Events(){
    const imageItems = [
      {
        image: "/assets/images/events/Events1.jpg",
        title: "Bekasi Community Festival",
        desc: "Melibatkan 60+ komunitas di Bekasi sebagai perayaan bersama komunitas di Bekasi",
      },
      {
        image: "/assets/images/events/Events2.jpg",
        title: "Konser Amal Bekasi ",
        desc: "Melibatkan 30+ komunitas Bekasi bergotong royong dalam membantu korban covid-19 di Bekasi",
      },
      {
        image: "/assets/images/events/Events3.jpg",
        title: "BekstoNature",
        desc: "Melibatkan 30+ komunitas Bekasi dalam kegiatan kebaikan Bekasi untuk Alam (menanam pohon produktif, workshop tanaman, seminar pentingnya RTH Kota,dsb)",
      },
      {
        image: "/assets/images/events/Events4.jpg",
        title: "Less Waste Event ",
        desc: "Mengoptimalkan konsep Less Waste Event dalam setiap event besar yang dilakukan guna meminimalisir produksi sampah dan mengubah habit /  culture masyarakat (pengunjung) dalam membuang sampah",
      },
      {
        image: "/assets/images/events/Events5.jpg",
        title: "Kelas Kita",
        desc: "Melibatkan 60+ komunitas di Bekasi sebagai perayaan bersama komunitas di Bekasi",
      },
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
          customButtonGroup={
            <ButtonSlider
              next={function (): void {}}
              previous={function (): void {}}
            />
          }
          renderButtonGroupOutside={true}
        >
          {imageItems.map((item, index) => (
            <div key={index} className="flex justify-center mb-4 lg:mb-0">
              <div className="px-4 relative card group w-64 h-72">
                <div className="rounded-lg overflow-hidden card-shadow shadow-lg relative">
                  <div className="absolute bg-green bg-opacity-25 opacity-0 hover:opacity-100 backdrop-blur-none group-hover:backdrop-blur-md transition duration-200 flex items-center justify-center w-full h-full">
                    <div className="bg-white rounded-full flex items-center justify-center">
                      <div className="p-2">
                        <h1 className="text-base text-neutral-50 font-bold text-center mb-2">{item.title}</h1>
                        <p className="text-sm text-neutral-50 text-justify">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={item.image}
                    width={280}
                    height={200}
                    className="w-64 h-72 rounded-lg"
                    alt="event"
                  />
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
      </section>
    );
}