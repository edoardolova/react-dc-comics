export default function NavbarExplore() {
    const navItems = [
        {
            imgSrc: "\\img\\buy-comics-digital-comics.png",
            text: "DIGITAL COMICS",
            link: "#"
        },
        {
            imgSrc: "\\img\\buy-comics-merchandise.png",
            text: "DC MERCHANDISE",
            link: "#"
        },
        {
            imgSrc: "\\img\\buy-comics-subscriptions.png",
            text: "SUBSCRIPTION",
            link: "#"
        },
        {
            imgSrc: "\\img\\buy-comics-shop-locator.png",
            text: "COMIC SHOP LOCATOR",
            link: "#"
        },
        {
            imgSrc: "\\img\\buy-dc-power-visa.svg",
            text: "DC POWER VISA",
            link: "#"
        }
    ];

    return (
        <>
            <div className="container text-center navbarExplore py-5">
                <div className="row">
                    {navItems.map((item) => (
                        <div className="col">
                            <img src={item.imgSrc} alt={item.text} className="me-3" />
                            <a href={item.link}>{item.text}</a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
