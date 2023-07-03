import React from 'react'
import '../css/Header.css'
const Header = () => {
    return (
        <header className="header-fixed">

            <div className="header-limiter">

                <h1><a href="#">Keeper<span>Weeper</span></a></h1>

                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Faq</a>
                    <a href="#">Contact</a>
                </nav>

            </div>

        </header>
    )
}

export default Header
