import { Contact, Footer, NavBar } from "@/components"

export default function ContactPage(){
    return(
        <div className="lg:container lg:px-5 lg:mx-auto">
            <NavBar/>
            <Contact/>
            <Footer/>
        </div>
    )
}