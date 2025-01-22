import React, { useState } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import UtilitiesPanel from './Utilities/UtilitiesPanel';
import HamburgerButton from './HamburgerButton';
import SideNav from './Sidenav';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className="bg-green-900 text-gold-300 py-4 px-4 sm:px-8 flex flex-row sm:flex-row items-center justify-between shadow-lg relative">
                {/* Logo */}
                <div className="logo-icon flex-shrink-0">
                    <Logo />
                </div>

                {/* Hamburger Button */}
                <div className="lg:hidden flex-shrink-0">
                    <HamburgerButton onClick={toggleMenu} />
                </div>

                {/* Navbar and Utilities Panel */}
                <div className={`nav-and-utilities hidden lg:flex lg:flex-grow lg:items-center lg:space-x-8`}>
                    <div className="nav flex-grow">
                        <Navbar />
                    </div>
                    <div className="utilities-panel flex items-center space-x-4">
                        <UtilitiesPanel />
                    </div>
                </div>
            </header>

            {/* SideNav */}
            <SideNav isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}

export default Header;