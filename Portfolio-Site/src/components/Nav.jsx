import { useState, useEffect } from "react";
import "../styles/Nav.css";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll)
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <nav className={`nav${scrolled}` ? 'nav-scrolled' : ''}>
            <button className="nav-logo" onClick={() => scrollTo('headline')}>
                <span className="logo-bracket">[</span>
                    {/* TODO: Add weather widget connection */}
                    dev
                <span className="logo-bracket">]</span>
            </button>
            <ul className="nav-links">
                    <li><button onClick={() => scrollTo('projects')}>Projects</button></li>
                    <li><button onClick={() => scrollTo('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollTo('contact')}>Contact</button></li>
            </ul>
        </nav>
    )
}

export default Nav;