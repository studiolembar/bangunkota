import { Footer, NavBar, Profile, Structure, Values, VisiMisi } from "@/components"

export default function ProfilePage(){
    return (
      <div>
        <NavBar />
        <Profile />
        <Values />
        <VisiMisi />
        <Structure />
        <Footer />
      </div>
    );
}