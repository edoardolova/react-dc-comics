import Banner from "./Banner"
import ComicsSeries from "./ComicsSeries"
import NavbarExplore from "./NavbarExplore"

export default function Main(){
    return(
        <>
            <Banner/>
            <ComicsSeries/>
            <div className="exploreSection">
                <NavbarExplore/>
            </div>
        </>
    )
}