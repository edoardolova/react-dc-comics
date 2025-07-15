import Logo from '../public/img/dc-logo.png';

export default function Navbar(){
    const navLinks =[
        {
            text: 'CHARACTER',
            href: '#',
            ariaCurrent: 'page'
        },
        {
            text: 'COMICS',
            href: '#',
        },
        {
            text: 'MOVIES',
            href: '#',
        },
        {
            text: 'TV',
            href: '#',
        },
        {
            text: 'GAMES',
            href: '#',
        },
        {
            text: 'COLLECTIBLES',
            href: '#',
        },
        {
            text: 'VIDEOS',
            href: '#',
        },
        {
            text: 'FANS',
            href: '#',
        },
        {
            text: 'NEWS',
            href: '#',
        },
        {
            text: 'SHOP',
            href: '#',
        },
    ]
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
                            {navLinks.map((link, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link" href={link.href} aria-current={link.ariaCurrent || undefined}>
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}