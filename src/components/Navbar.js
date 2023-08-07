import {useRef} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css';

function Navbar() {

    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (
        <nav ref={navRef}>
            <div className="navbar-left">
                <div className="wrapper">
                    <div className="typing-demo">
                        Shreedhar Patil
                    </div>
                </div>
            </div>
            <div className="navbar-right">
                <h3>GitHub</h3>
                <h3>LinkedIn</h3>
                <h3>Contact</h3>
                <button><FaTimes /></button>
            </div>
        </nav>
    );
}

export default Navbar;
