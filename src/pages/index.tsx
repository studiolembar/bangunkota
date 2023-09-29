import { About, Client, Community, Footer, Hero, NavBar, Statistics } from "../components";


export default function Home() {
  return (
    <div className="lg:container lg:px-5 lg:mx-auto">
      <NavBar/>
      <Hero/>
      <About/>
      <Community/>
      <Statistics/>
      <Client/>
      <Footer/>
    </div>
  );
}
