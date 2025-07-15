import comics from "../data/comics"


export default function ComicsSeries(){
    return(
        <>
            <section className="comicsSeries">
                <div className="container py-5">
                    <h4 className="comicsBadge">CURRENT SERIES</h4>
                    <div className="row gy-4 mb-4">
                        {comics.map((comic, index) => (
                            <div className="col-6 col-md-4  col-lg-2" key={index}>
                                <div className="cardComics">
                                    <div className="cardImgWrapper">
                                        <img src={comic.thumb} className="cardImg" alt={comic.series} />
                                    </div>
                                    <h5 className="comicTitle mt-3">{comic.series}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="d-flex">
                        <button type="button" className="btn btn-primary btn-lg ms-auto me-auto">LOAD MORE</button>
                    </div>
                </div>
            </section>
        
        </>
    )
}