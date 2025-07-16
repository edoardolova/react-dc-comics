import CardComics from "./CardComics";


export default function ComicsSeries({comics}){
    return(
        <>
            <section className="comicsSeries">
                <div className="container py-5">
                    <h4 className="comicsBadge">CURRENT SERIES</h4>
                    <div className="row gy-4 mb-4">
                        {comics.map((comic, index) => (
                            <CardComics comic={comic} key={index}/>
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