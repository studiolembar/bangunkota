import Image from "next/image";

export function Structure(){
    return (
      <section className="mt-20 px-5 lg:px-0 font-poppins lg:mb-20">
        <div className="flex flex-col lg:flex-row items-center gap-2 text-3xl mb-10 font-medium text-green">
          <Image src={"/assets/icons/logo.png"} width={40} height={10} alt="logo" />
          Our Teams
        </div>
        <Image src="/assets/images/struktur.png" width={700} height={70} alt="logo" layout="responsive"
        />
      </section>
    );
}