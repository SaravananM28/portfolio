import { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="nav_wrapper">
            <div className="nav_section container">
                <a href="#home" className="brand" onClick={closeMenu}>
                    <h3>Saravanan<span className='dot'>.</span></h3>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <a href="#about" className='nav-link'>About</a>
                    <a href="#skills" className='nav-link'>Skills</a>
                    <a href="#projects" className='nav-link'>Projects</a>
                    <a href="#experience" className='nav-link'>Experience</a>
                    <a href="#contact" className='nav-link'>Contact</a>
                </nav>

                <div className="nav_right">
                    <a href="mailto:saravananm1028@gmail.com" className="nav_btn desktop-cta">Say Hello</a>
                    
                    {/* Hamburger Toggle Button */}
                    <button 
                        type="button"
                        className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-nav-drawer ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav-links">
                    <a href="#home" className="mobile-nav-link" onClick={closeMenu}>Home</a>
                    <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
                    <a href="#skills" className="mobile-nav-link" onClick={closeMenu}>Skills</a>
                    <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
                    <a href="#experience" className="mobile-nav-link" onClick={closeMenu}>Experience</a>
                    <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
                </nav>
                <div className="mobile-nav-footer">
                    <a href="mailto:saravananm1028@gmail.com" className="btn btn-primary mobile-cta-btn" onClick={closeMenu}>
                        Say Hello Via Email
                    </a>
                </div>
            </div>

            {/* Mobile Backdrop */}
            {isMenuOpen && <div className="mobile-backdrop" onClick={closeMenu}></div>}
        </header>
    );
}