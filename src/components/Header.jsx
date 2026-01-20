import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">Movie App</div>
                <nav className="nav">
                    <NavLink className="nav-link" to={'/'}>Home</NavLink>
                    <NavLink className="nav-link" to={'/favorites'}>Favorites</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header
