import Link from "next/link";
import "./sideBar.css"
import Icons from "../../Icons/Icon";
export default function SideNavBar() {
    return (
        <header className="side-navbar-header">
            <nav className='side-navbar'>
                <ul className='nav-links'>
                    <li className="side-toggle-btn">
                        <a>
                            <span><i><Icons.Menu/></i></span>
                            <span><Icons.Logo />ragneel</span>
                        </a>
                    </li>
                    <li>
                        <Link href="/">
                            <span><i><Icons.Home/></i></span>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/discover">
                            <span><i><Icons.Compass/></i></span>
                            <span>Discover</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/movie">
                            <span><i><Icons.Movie/></i></span>
                            <span>Movie</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tv">
                            <span><i><Icons.Tv/></i></span>
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