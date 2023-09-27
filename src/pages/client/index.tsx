import { Client, Footer, NavBar } from "@/components"

export default function ClientPage(){
    return(
        <div className="lg:container lg:px-5 lg:mx-auto">
            <NavBar/>
            <Client/>
            <Footer/>
        </div>
    )
}