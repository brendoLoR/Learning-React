import React from "react"

export default function Header(){
    return (
    <header className="header">
        <link rel="stylesheet" href={require("../src/index.css")} />
        <nav className="navbar">
            <img src={require("./React.png")} width="40px" alt="" />

            <ul className="main-menu-navbar">
                <li>Princing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}