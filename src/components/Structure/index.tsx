import Image from "next/image";

export function Structure(){
    return(
        <section className="mt-20 px-5 lg:px-0 font-poppins lg:mb-20">
            <h1 className="text-center text-4xl font-medium">Our Teams</h1>
            <hr className="my-4 text-base-300" />
            <Image src="/assets/images/struktur.png" width={700} height={70} alt="logo" layout="responsive"/>
        </section>
    )
}