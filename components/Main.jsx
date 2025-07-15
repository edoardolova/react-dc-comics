import Banner from "./Banner"
import NavbarExplore from "./NavbarExplore"

export default function Main(){
    return(
        <>
            <Banner/>

            <div className="exploreSection">
                <NavbarExplore/>
            </div>
        </>
    )
}