import Banner from "./Banner"
import ComicsSeries from "./ComicsSeries"
import NavbarExplore from "./NavbarExplore"

export default function Main({comics}){
    return(
        <>
            <Banner/>
            <ComicsSeries comics={comics}/>
            <div className="exploreSection">
                <NavbarExplore/>
            </div>
        </>
    )
}