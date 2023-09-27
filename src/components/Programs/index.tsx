import Image from "next/image";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export function Programs() {
    const programItems = [
      {
        image: "/assets/images/programs/Program1.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah. Berlokasi di Bantar Gebang - Kota Bekasi, dengan program unggulan mengangkat 3 aspek utama",
      },
      {
        image: "/assets/images/programs/Program2.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah. Berlokasi di Bantar Gebang - Kota Bekasi, dengan program unggulan mengangkat 3 aspek utama",
      },
      {
        image: "/assets/images/programs/Program3.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah. Berlokasi di Bantar Gebang - Kota Bekasi, dengan program unggulan mengangkat 3 aspek utama",
      },
      {
        image: "/assets/images/programs/Program4.jpg",
        title: "Museum Sampah Indonesia+",
        desc: "akan menjadi pusat pengetahuan terbarukan (center of renewable knowledge) mengenai pengelolaan dan pemanfaatan sampah. Berlokasi di Bantar Gebang - Kota Bekasi, dengan program unggulan mengangkat 3 aspek utama",
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
    <section className="my-20">
      <Carousel responsive={responsive}>
        {programItems.map((item, index) => (
          <div
            key={index}
            className="card lg:w-11/12 card-side bg-base-200 shadow-xl"
          >
            <figure className="w-1/2 mr-2">
              <Image src={item.image} width={500} height={300} layout="responsive" alt="Program" />
            </figure>
            <div className="card-body p-0">
              <h2 className="card-title">{item.title}</h2>
              <p className="">{item.desc}</p>
              <div className="card-actions justify-end m-2">
              <a className="bg-yellow hover:bg-yellow-light hover:cursor-pointer py-1 text-base-100 font-semibold px-4 rounded-lg text-lg">Selengkapnya</a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
