import './headerStyle.css'

function Header() {
    return (
        <header id="header">
            <div className="header-wrapper">
                <div id="logo">
                    <a href='#home'>Logo</a>
                </div>
                <nav id="navigation">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#sercvices">Services</a>
                    <a href="#contact">Contanct</a>
                </nav>
            </div>
        </header>
    );
}


export default Header;