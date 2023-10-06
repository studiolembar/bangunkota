import { Footer, NavBar, Profile, Structure, Values, VisiMisi } from "@/components"

export default function ProfilePage(){
    return(
        <div className="lg:container lg:px-5 lg:mx-auto">
            <NavBar/>
            <Profile/>
            <Values/>
            <VisiMisi/>
            <Structure/>
            <Footer/>
        </div>
    )
}