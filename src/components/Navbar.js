import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav>
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
            </div>
        </nav>
    );
}

export default Navbar;
