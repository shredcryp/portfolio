import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
    const navRef = useRef();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav ref={navRef} className={isMenuOpen ? 'responsive_nav' : ''}>
            <div className="navbar-left">
                <div className="wrapper">
                    <div className="typing-demo">
                        Shreedhar Patil
                    </div>
                </div>
            </div>
            <div className={`navbar-right ${isMenuOpen ? 'show' : ''}`}>
                <h3>GitHub</h3>
                <h3>LinkedIn</h3>
                <h3>Contact</h3>
            </div>
            <button className="hamburger" onClick={toggleMenu}><FaBars /></button>
            <button className="cross" onClick={toggleMenu}><FaTimes /></button>
        </nav>
    );
}

export default Navbar;
