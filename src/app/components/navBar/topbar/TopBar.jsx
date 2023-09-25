"use client"
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import "./topBar.css"

export default function TopNavBar() {
    return (
        <header className="top-navbar-outer maxContainer">
            <nav className="top-navbar">
                <NavLogo/>
                <SearchBox/>
            </nav>
        </header>
    );
}
// navLogo
function NavLogo() {
    return (
        <div className='logo'>
            <Link to={"/"}>
                <div className='img'>
                    <i className='fa-solid fa-dragon'></i>
                </div>
                <span>Natsu G</span>
            </Link>
        </div>
    );
}

function SearchBox() {
    const [QInput,setQInput] =useState("")
    const navigate = useNavigate();
    
    const searchSubmitHandle=(e)=>{
        e.preventDefault()
        if (QInput.trim() !== '') {
            navigate(`search/q/${QInput.replace(" ", "+")}`);
        } else {
            console.log('Input is empty. Search not allowed.');
        }
        setQInput("")
    }
    return (
        <form className='search-container' action='/' onSubmit={searchSubmitHandle}>
            <input
                type='text'
                placeholder='Search'
                value={QInput}
                onChange={(e) => setQInput(e.target.value)}
            />
            <button type='submit'>
                <i className='fa-solid fa-magnifying-glass'></i>
            </button>
        </form>
    );
}