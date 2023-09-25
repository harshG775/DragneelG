import Link from "next/link";
import "./sideBar.css"

export default function SideNavBar() {
    return (
        <header className="side-navbar-header">
            <nav className='side-navbar'>
                <ul className='nav-links'>
                    <li className="side-toggle-btn"><i class="fa-solid fa-bars"></i></li>
                    <li>
                        <Link href="/">
                            <span><i className='fa-solid fa-house'></i></span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/discover">
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
                    <li className='user'>
                        <Link href="user">
                            <span><i className="fa-solid fa-user"></i></span>
                            <span>User</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}