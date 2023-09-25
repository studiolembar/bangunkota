import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faCar, faLaptop, faLeaf, faMusic, faNewspaper, faPaintBrush, faRunning, faTheaterMasks, faUserGraduate } from "@fortawesome/free-solid-svg-icons"

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
      <h1 className="text-center text-5xl mb-3">Bidang Komunitas</h1>
      <h2 className="text-center text-lg mb-10">Terdapat 10 bidang di BangunKota</h2>
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
