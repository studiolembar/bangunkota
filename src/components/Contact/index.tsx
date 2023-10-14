import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export function Contact(){
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253816.70031356195!2d106.977113!3d-6.278723!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d8546ad633d%3A0x79e8de8965402078!2sBekasi%2C%20West%20Java%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1695822422114!5m2!1sen!2sus"
    return (
      <section className="px-5 lg:px-0 font-poppins mb-20">
        <div className="lg:px-5 lg:container lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-2 text-3xl mb-10 font-medium text-green">
          <Image src={"/assets/icons/logo.png"} width={40} height={10} alt="logo"/>
          Contact Us
        </div>
          <div className="flex flex-col lg:flex-row gap-10 justify-center mt-20">
            <div className="w-full lg:w-5/12 border border-green rounded-lg p-10">
              <nav className="col-span-2 lg:col-span-1">
                <header className="text-lg font-semibold">
                  Connect With Us!
                </header>
                <p className="text-base mb-3">
                  Sekretariat Bangun Kota Jalan Apa Bekasi
                </p>
                <div className="flex items-center py-1">
                  <div className="bg-yellow rounded-md mr-2 w-9 h-9 flex justify-center items-center">
                    <FontAwesomeIcon icon={faGlobe} color="#ffff" size={"xl"} />
                  </div>
                  <div className="text-base">bangunkota.com</div>
                </div>
                <div className="flex items-center py-1">
                  <div className="bg-yellow rounded-md mr-2 w-9 h-9 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      color="#ffff"
                      size={"xl"}
                    />
                  </div>
                  <div className="text-base">@bangunkota.id</div>
                </div>
                <div className="flex items-center py-1">
                  <div className="bg-yellow rounded-md mr-2 w-9 h-9 flex justify-center items-center">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      color="#ffff"
                      size={"xl"}
                    />
                  </div>
                  <div className="text-base">WA Group Community Sharing</div>
                </div>
              </nav>
              <iframe
                src={map}
                className="mt-5 w-full"
                width="420"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="w-full lg:w-5/12 border border-green rounded-lg p-10">
              <h1 className="text-center text-3xl font-medium mb-5">
                Contact us
              </h1>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full my-2"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full my-2"
                />
                <textarea
                  className="textarea textarea-bordered textarea-lg h-36 w-full my-2"
                  placeholder="Message"
                ></textarea>
                <button className="btn btn-warning w-full mt-2">Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}