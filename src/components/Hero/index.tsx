import { Player, Controls } from '@lottiefiles/react-lottie-player';

export function Hero() {
  return (
    <section className="font-poppins">
      <div className="lg:pl-2">
        <div className="lg:min-h-screen grid lg:grid-cols-2 gap-4 items-center justify-center">
          <Player
            autoplay
            loop
            src="/assets/animation/hero-animation2.json"
            className="w-full"
          >
            <Controls visible={false}/>
          </Player>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-3">
              Siap Untuk <br />
              #BangunKota
            </h1>
            <h2 className="text-xl mb-5">Community platform to enhance urban culture solution</h2>
            <a className="bg-yellow hover:bg-yellow-light hover:cursor-pointer py-3 text-base-100 font-semibold px-4 rounded-lg text-xl">
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
