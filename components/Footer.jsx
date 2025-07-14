export default function Footer(){
    return(
        <>
            <footer>
                <div className="footerLinks p-5">
                <div className="container">
                    <div className="row w-50">
                        <div className="col">
                            <h3 className="fw-semibold">DC COMICS</h3>
                            <ul>
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <h3 className="fw-semibold">SHOP</h3>
                            <ul>
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>

                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="fw-semibold">DC</h3>
                            <ul>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy (New)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h3 className="fw-semibold">SITES</h3>
                            <ul>
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                                <li><a href="#">Videos</a></li>
                            </ul>
                        </div>
                    </div>
                    <img src="/img/dc-logo.png" alt="" className="footerLogo" />
                </div>

                </div>
                <div className="footerSocial py-4">
                    <div className="container">
                        <div className="d-flex">
                            <button type="button" class="btn btn-outline-primary text-white">SIGN-UP NOW!</button>
                            <div className="d-flex social ms-auto">
                                <h4 className="me-3">FOLLOW US</h4>
                                <a href="#"><img src="/img/footer-facebook.png" alt="" /></a>
                                <a href="#"><img src="/img/footer-twitter.png" alt="" /></a>
                                <a href="#"><img src="/img/footer-youtube.png" alt="" /></a>
                                <a href="#"><img src="/img/footer-pinterest.png" alt="" /></a>
                                <a href="#"><img src="/img/footer-periscope.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}