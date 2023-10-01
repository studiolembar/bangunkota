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
      <h1 className="text-center text-5xl mb-10">Statistik</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {statisticItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <dt className="mb-2 text-3xl font-extrabold text-green">{item.number}</dt>
          <dd className="text-gray-500 text-center">{item.name}</dd>
        </div>
        ))}
      </div>
    </section>
  );
}
