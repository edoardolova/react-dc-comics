export default function CardComics(props){
    return(
        <>
            <div className="col-6 col-md-4  col-lg-2">
                <div className="cardComics">
                    <div className="cardImgWrapper">
                        <img src={props.comic.thumb} className="cardImg" alt={props.comic.series} />
                    </div>
                    <h5 className="comicTitle mt-3">{props.comic.series}</h5>
                </div>
            </div>
        </>
    )
}