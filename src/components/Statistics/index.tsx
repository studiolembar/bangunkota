import Image from "next/image";

export function Statistics() {
  const statisticItems = [
    {number: "1", name: "Creative Space"},
    {number: "3", name: " Community Platforms"},
    {number: "12", name: "Memorandum of Understandings"},
    {number: "18", name: "Sustainable Events"},
    {number: "75+", name: "Bekasi Communities"},
    {number: "10000+", name: "Participants"},
  ]
  return (
    <section className="my-20 px-5 lg:px-0 font-poppins">
      <div className="lg:px-5 lg:container lg:mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-2 text-3xl mb-10 font-medium text-green">
          <Image src={"/assets/icons/logo.png"} width={40} height={10} alt="logo"/>
          Impacts
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-yellow py-10 px-2 rounded-3xl">
          {statisticItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <dt className="mb-2 text-3xl font-extrabold text-base-100">
                {item.number}
              </dt>
              <dd className="text-gray-500 text-center font-semibold">{item.name}</dd>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
