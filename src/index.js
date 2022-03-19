function Header(){
    return (
    <header>
        <nav className="navbar">
            <img src="../src/React.png" width="40px"/>

            <ul className="main-menu-navbar">
                <li>Princing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}
function Body(){
    return (
        <body>
            <h1>This is my page, ok?</h1>
            <ol>
                <li>my Page</li>
                <li>my Page</li>
                <li>my Page</li>
           </ol>
        </body>
    )
}

function Foorer() {
    return (
        <footer>
            <small>this is my page</small>
        </footer>
    )
}
function Page(){
    return (
        <div>
        <Header />
        <Body />
        <Foorer />
    </div>
    )
}
ReactDOM.render(<Page />, document.getElementById("root"))
