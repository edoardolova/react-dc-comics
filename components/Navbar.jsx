import Logo from '../public/img/dc-logo.png';

export default function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg py-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} alt="" className='logo'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">CHARACTERS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">COMICS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MOVIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">TV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">GAMES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">COLLECTIBLES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">VIDEOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">FANS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">NEWS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">SHOP</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}