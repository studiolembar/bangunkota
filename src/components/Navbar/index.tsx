import Image from "next/image";
import Link from "next/link";

export function NavBar() {
    const dropdownItems = [
      { name: "Sosial - pendidikan", href: "#" },
      { name: "Lingkungan", href: "#" },
      { name: "Sejarah - Budaya", href: "#" },
      { name: "Olahraga", href: "#" },
      { name: "Seni Musik", href: "#" },
      { name: "Seni Teater", href: "#" },
      { name: "Seni Rupa", href: "#" },
      { name: "Foto dan Videografi", href: "#" },
      { name: "IT Digital", href: "#" },
      { name: "Otomotif", href: "#" },
    ];
    return (
      <div className="navbar bg-base-100 font-poppins">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={'/'}>Home</Link>
              </li>
              <li>
                <Link href={'/profile'}>Profile</Link>
              </li>
              <li>
                <Link href={'/event-program'}>Event & Program</Link>
              </li>
              <li>
                <Link href={'/client'}>CLient</Link>
              </li>
              <li>
                <details>
                  <summary>Community</summary>
                  <ul>
                    {dropdownItems.map((item,index) => (
                    <li key={index}>
                      <a>{item.name}</a>
                    </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li>
                <Link href={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <Image
            alt="bangunkota-logo"
            className="mr-3 h-6 sm:h-9"
            src="/assets/icons/bangunkota-logo.png"
            width={130}
            height={30}
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={'/'} className="hover:bg-base-100 hover:text-green text-lg">Home</Link>
            </li>
            <li>
              <Link href={'/profile'} className="hover:bg-base-100 hover:text-green text-lg">Profile</Link>
            </li>
            <li>
              <Link href={'/event-program'} className="hover:bg-base-100 hover:text-green text-lg">Event & Program</Link>
            </li>
            <li>
              <Link href={'/client'} className="hover:bg-base-100 hover:text-green text-lg">Client</Link>
            </li>
            <li className="dropdown">
              <label tabIndex={0} className="lg:flex hover:bg-base-100 hover:text-green text-lg">
                Community
                <Image src="/assets/icons/arrow-down.svg" width={20} height={20} alt="logo"/>
              </label>
              <div className="menu xl:menu-horizontal lg:min-w-max hover:bg-base-100 dropdown-content mt-3 shadow bg-base-100 rounded">
                <div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Sosial - pendidikan</a>
                  </div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Lingkungan</a>
                  </div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Sejarah - Budaya</a>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Olahraga</a>
                  </div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Seni Musik</a>
                  </div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Seni Teater</a>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Seni Rupa</a>
                  </div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Foto dan Videografi</a>
                  </div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">IT Digital</a>
                  </div>
                </div>
                <div>
                  <div className="p-2">
                    <a className="hover:bg-none font-medium hover:text-green">Otomotif</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href={'/contact'} className="hover:bg-base-100 hover:text-green text-lg">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="bg-yellow hover:bg-yellow-light hover:cursor-pointer py-2 text-base-100 font-semibold px-4 rounded-lg text-lg">Gabung</a>
        </div>
      </div>
    );
}
