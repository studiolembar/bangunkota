import Image from "next/image";

export function VisiMisi(){
    const misiItems = [
      {desc:"Berperan sebagai forum lintas-komunitas di Kota Bekasi"},
      {desc:"Melestarikan budaya lokal Bekasi sebagai warisan kebudayaan yang perlu diturunkan untuk generasi mendatang"},
      {desc:"Menghadirkan pariwisata Kota Bekasi yang berbasis nilai kebudayaan dan berkelanjutan"},
      {desc:"Menghadirkan intervensi ruang, seni instalasi dan seni visual di ruang publik Kota Bekasi"},
      {desc:"Menghubungkan komunitas dengan stakeholders pembentuk kota di Kota Bekasi (Hexa-helix)"},
    ]
    return (
      <section className="mt-20 px-5 lg:px-0 font-poppins">
        <div className="lg:px-5 lg:container lg:mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-2 text-3xl mb-10 font-medium text-green">
            <Image
              src={"/assets/icons/logo.png"}
              width={40}
              height={10}
              alt="logo"
            />
            Visi & Misi
          </div>
          <div className="flex gap-10 flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 w-full">
              <h1 className="text-2xl mb-2 font-medium">Visi</h1>
              <article className="text-base text-justify">
                Terciptanya sumber daya kreatif dan ruang publik kota yang
                berkualitas berbasis komunitas dalam menumbuhkan kebanggaan
                masyarakat Kota Bekasi berasaskan nilai budaya, seni,
                kreatifitas, pariwisata dan keberlanjutan.
              </article>
            </div>
            <div className="lg:w-1/2 w-full">
              <h1 className="text-2xl mb-2 font-medium">Misi</h1>
              <article className="text-base text-justify">
                {misiItems.map((item, index) => (
                  <div key={index} className="flex items-center my-2">
                    <div className="w-7 h-7 mr-3 flex justify-center items-center bg-green rounded-full text-base-100">
                      {index + 1}
                    </div>
                    <div className="w-full">{item.desc}</div>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </section>
    );
}