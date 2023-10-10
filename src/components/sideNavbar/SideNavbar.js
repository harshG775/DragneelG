import Link from "next/link";
import "./sideNavbar.css"

export default function Navbar() {
    return (
        <nav className='side-navbar'>
            <ul className='nav-links'>
                <li className="nav-logo">
                    <a>
                        <i className="fa-solid fa-dragon"></i>
                        <span>Dragneel</span>
                    </a>
                </li>
                <li>
                    <Link href="/">
                        <span><i className='fa-solid fa-house'></i></span>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href={`/discover`}>
                        <span><i className="fa-solid fa-compass"></i></span>
                        <span>Discover</span>
                    </Link>
                </li>
                <li>
                    <Link href="/movie">
                        <span><i className='fa-solid fa-film'></i></span>
                        <span>Movie</span>
                    </Link>
                </li>
                <li>
                    <Link href="/tv">
                        <span><i className="fa-solid fa-desktop"></i></span>
                        <span>Tv Show</span>
                    </Link>
                </li>
                <li className='settings'>
                    <Link href="settings">
                        {/* <img src='profile' alt='' /> */}
                        <span><i className="fa-solid fa-gear"></i></span>
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}