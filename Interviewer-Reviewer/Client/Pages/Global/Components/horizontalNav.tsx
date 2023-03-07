const Nav = () => {
    return (
        <nav className="navbar">
            <div className="logo container">
                <a href="." className="logo clickable">
                    <img src="/images/logo.png" alt="logo" />
                    <h1 className="nav-text">
                        Interviewer Reviewer
                    </h1>
                </a>
            </div>
            <div className="nav-links">
                <ul>
                    <li>
                        {/* Give the appropriate sections IDs */}
                        <a href="" className="nav-text clickable">
                            <p>
                                Home
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="." className="nav-text clickable">
                            <p>
                                About
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href="." className="nav-text clickable">
                            <p>
                                Contact
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="nav-buttons">
                <ul>
                    <li>
                        <a href="." className="nav-text clickable">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="." className="nav-text clickable">
                            Register
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
