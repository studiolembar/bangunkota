import Image from "next/image";

export function About(){
    return(
        <section className="mt-20 lg:mt-0 px-5 lg:px-0 font-poppins">
            <h1 className="text-center text-5xl mb-10">Tentang Kami</h1>
            <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2">
                <div className="lg:col-start-1 lg:col-end-1">
                    <p className="mb-7 text-justify">Bangun Kota merupakan sebuah platform yang menaungi komunitas-komunitas dari berbagai bidang yang ada di kota / kabupaten Bekasi</p>
                    <a className="bg-yellow hover:bg-yellow-light hover:cursor-pointer py-2 text-base-100 font-semibold px-4 rounded-lg">Selengkapnya</a>
                </div>
                <div className="lg:col-end-3 lg:col-start-3">
                    <Image src="/assets/icons/bangunkota-logo.png" width={335} height={95} alt="logo"/>
                </div>
            </div>
        </section>
    )
}