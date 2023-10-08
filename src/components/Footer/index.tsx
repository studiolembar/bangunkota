import Image from "next/image";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export function Footer() {

const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
useEffect(() => {
  function getCurrentYear() {
    setCurrentYear(new Date().getFullYear());
  }
  getCurrentYear();
}, []);

  return (
    <section className="px-5 lg:px-0 font-poppins bg-base-200 pt-5 lg:pt-10 rounded-t-3xl">
      <div className="lg:px-5 lg:container lg:mx-auto">
        <footer className="footer bg-base-200 pb-5 text-base-content grid lg:grid-cols-4 gap-4">
          <nav className="col-span-2 lg:col-span-1 order-last lg:order-none">
            <header className="text-lg font-semibold">Connect With Us!</header>
            <p className="text-base">
              Sekretariat Bangun Kota Jalan Apa Bekasi
            </p>
            <div className="flex items-center">
              <div className="bg-yellow rounded-md mr-2 w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faGlobe} color="#ffff" size={"xl"} />
              </div>
              <div className="text-base">bangunkota.com</div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow rounded-md mr-2 w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faInstagram} color="#ffff" size={"xl"} />
              </div>
              <div className="text-base">@bangunkota.id</div>
            </div>
            <div className="flex items-center">
              <div className="bg-yellow rounded-md mr-2 w-9 h-9 flex justify-center items-center">
                <FontAwesomeIcon icon={faWhatsapp} color="#ffff" size={"xl"} />
              </div>
              <div className="text-base">WA Group Community Sharing</div>
            </div>
          </nav>
          <nav className="lg:col-span-1">
            <header className="text-lg font-semibold">Bangun Kota</header>
            <a className="link text-green text-base">Home</a>
            <a className="link text-green text-base">Profile</a>
            <a className="link text-green text-base">Event</a>
            <a className="link text-green text-base">Contact</a>
          </nav>
          <nav className="lg:col-span-1">
            <header className="text-lg font-semibold">Kebijakan Kami</header>
            <a className="link text-green text-base">Terms and Conditions</a>
            <a className="link text-green text-base">Privacy Policy</a>
          </nav>
          <nav className="col-span-2 lg:col-span-1 order-first lg:order-none">
            <header className="mx-auto lg:mx-0">
              <Image
                src="/assets/icons/bangunkota-logo.png"
                width={250}
                height={250}
                alt="logo"
                className="w-36 h-12 lg:w-60 lg:h-14"
              />
            </header>
            <p className="text-justify text-base">
              Bangun Kota merupakan sebuah platform yang menaungi
              komunitas-komunitas dari berbagai bidang yang ada di kota /
              kabupaten Bekasi
            </p>
          </nav>
        </footer>
        <footer className="bg-base-200 footer py-4 border-t text-base-content border-base-300 bg-[url('/assets/images/ornament-footer.png')] bg-no-repeat bg-right bg-contain">
          <aside className="items-center">
            <p className="text-base">
              Copyright © {currentYear} BangunKota.com
            </p>
          </aside>
        </footer>
      </div>
    </section>
  );
}
