import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCar, faLaptop, faLeaf, faMusic, faNewspaper, faPaintBrush, faRunning, faTheaterMasks, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image";

export function Community() {
  const communityItems = [
    {
      id: 1,
      name: "Sosial - Pendidikan",
      icon: <FontAwesomeIcon icon={faUserGraduate} color="#ffff" size={"2x"} />,
      bg: "bg-yellow",
    },
    {
      id: 2,
      name: "Olahraga",
      icon: <FontAwesomeIcon icon={faRunning} color="#ffff" size={"2x"} />,
      bg: "bg-green",
    },
    {
      id: 3,
      name: "Lingkungan",
      icon: <FontAwesomeIcon icon={faLeaf} color="#ffff" size={"2x"} />,
      bg: "bg-yellow",
    },
    {
      id: 4,
      name: "Otomotif",
      icon: <FontAwesomeIcon icon={faCar} color="#ffff" size={"2x"} />,
      bg: "bg-green",
    },
    {
      id: 5,
      name: "Sejarah - Budaya",
      icon: <FontAwesomeIcon icon={faNewspaper} color="#ffff" size={"2x"} />,
      bg: "bg-yellow",
    },
    {
      id: 6,
      name: "Foto dan Videografi",
      icon: <FontAwesomeIcon icon={faCameraRetro} color="#ffff" size={"2x"} />,
      bg: "bg-green",
    },
    {
      id: 7,
      name: "Seni Musik",
      icon: <FontAwesomeIcon icon={faMusic} color="#ffff" size={"2x"} />,
      bg: "bg-yellow",
    },
    {
      id: 8,
      name: "Seni Teater",
      icon: <FontAwesomeIcon icon={faTheaterMasks} color="#ffff" size={"2x"} />,
      bg: "bg-green",
    },
    {
      id: 9,
      name: "Seni Rupa",
      icon: <FontAwesomeIcon icon={faPaintBrush} color="#ffff" size={"2x"} />,
      bg: "bg-yellow",
    },
    {
      id: 10,
      name: "IT Digital",
      icon: <FontAwesomeIcon icon={faLaptop} color="#ffff" size={"2x"} />,
      bg: "bg-green",
    },
  ];
  return (
    <section className="mt-20 px-5 lg:px-0 font-poppins">
      <div className="flex flex-col lg:flex-row items-center gap-2 mb-10">
        <div>
          <Image src={"/assets/icons/logo.png"} width={40} height={10} alt="logo"/>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-medium text-green">Bidang Komunitas</h1>
          <h2 className="text-lg">Terdapat 10 bidang di BangunKota</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {communityItems.map((item) => (
          <div key={item.id} className={`text-center ${item.bg} py-10`}>
            <div className="flex justify-center">
              {item.icon}
            </div>
            <p className="text-base-100">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
