import Image from "next/image";

export function Hero() {
  return (
    <section className="font-poppins">
      <div className="lg:min-h-screen grid lg:grid-cols-2 gap-4 items-center justify-center">
        <div>
          <Image src="/assets/images/hero-image.jpg" width={700} height={70} alt="logo"/>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-3">Siap Untuk <br/>#BangunKota</h1>
          <h2 className="text-xl mb-5">Sebuah cara untuk menikmati kota</h2>
          <a className="bg-yellow hover:bg-yellow-light hover:cursor-pointer py-3 text-base-100 font-semibold px-4 rounded-lg text-xl">Selengkapnya</a>
        </div>
      </div>
    </section>
  );
}
