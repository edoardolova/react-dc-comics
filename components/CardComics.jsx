export default function CardComics({comic}){
    return(
        <>
            <div className="col-6 col-md-4  col-lg-2">
                <div className="cardComics">
                    <div className="cardImgWrapper">
                        <img src={comic.thumb} className="cardImg" alt={comic.series} />
                    </div>
                    <h5 className="comicTitle mt-3">{comic.series}</h5>
                </div>
            </div>
        </>
    )
}