export default function Footer(){
    const socialIcons = [
        {
            name: 'facebook icon',
            src: "/img/footer-facebook.png",
            href: "#" 
        },
        {
            name: 'twitter icon',
            src: "/img/footer-twitter.png",
            href: "#" 
        },
        {
            name: 'youtube icon',
            src: "/img/footer-youtube.png",
            href: "#" 
        },
        {
            name: 'pinterest icon',
            src: "/img/footer-pinterest.png",
            href: "#" 
        },
        {
            name: 'periscope icon',
            src: "/img/footer-periscope.png",
            href: "#" 
        }
    ]

    const footerLinks = [
        {
            title: "DC COMICS",
            links: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"]
        },
        {
            title: "SHOP",
            links: ["Shop DC", "Shop DC Collectibles"]
        },
        {
            title: "DC",
            links: [
            "Terms Of Use", "Privacy Policy (New)", "Ad Choices", "Advertising",
            "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates",
            "Ratings", "Shop Help", "Contact Us"
            ]
        },
        {
            title: "SITES",
            links: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa", "Videos"]
        }
    ];
    return(
        <>
            <footer>
                <div className="footerLinks p-5">
                    <div className="container">
                        <div className="row w-50">
                            <div className="col">
                            {/* first 2 section in the same col  */}
                            {footerLinks.slice(0, 2).map((column, index) => (
                                <div key={index}>
                                <h3 className="fw-semibold">{column.title}</h3>
                                <ul>
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            ))}
                            </div>
                            {footerLinks.slice(2).map((column, index) => (
                            <div className="col" key={index + 2}>
                                <h3 className="fw-semibold">{column.title}</h3>
                                <ul>
                                {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <a href="#">{link}</a>
                                        </li>
                                ))}
                                </ul>
                            </div>
                            ))}
                        </div>
                        <img src="/img/dc-logo.png" alt="" className="footerLogo" />
                    </div>

                </div>
                <div className="footerSocial py-4">
                    <div className="container">
                        <div className="d-flex">
                            <button type="button" className="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
                            <div className="d-flex social ms-auto">
                                <h4 className="me-3">FOLLOW US</h4>
                                {
                                    socialIcons.map((item, index) =>{
                                        return(
                                            <a href={item.href} key={index}><img src={item.src} alt={item.name} /></a>
                                        ) 
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}