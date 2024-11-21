import React, { FC } from 'react';
import { HeaderProps } from "../types/headerInterface";
import humberger from "../assets/hamburger.png";
import logo from "../assets/logo.png";


const Header: FC<HeaderProps> = ({ navLinks, signupButton, children }) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleMenuToggle = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="fixed top-0 w-full z-20 flex items-center justify-between bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 py-4 px-6">
            <div className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="w-auto h-16" />
            </div>

            <nav className="space-x-6 text-white hidden md:flex">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:text-gray-300">
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className='hidden md:flex  space-x-3  items-center px-2'>

                {children}

                <button
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full "
                    onClick={() => window.location.href = signupButton.href}
                >
                    {signupButton.label}
                </button>
            </div>


            <button
                id="menu-btn"
                className="text-xl md:hidden focus:outline-none flex"
                onClick={handleMenuToggle}
            >
                <img src={humberger} className="w-12 h-12 object-cover" alt="Menu" />
            </button>

            <nav
                id="mobile-menu"
                className={` bg-black backdrop-filter backdrop-blur-lg bg-opacity-80  items-center text-center p-5 ${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden flex flex-col absolute w-screen h-screen top-0 left-0   justify-center `}
            >
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="block my-2 hover:text-gray-400" onClick={handleMenuToggle}>
                        {link.label}
                    </a>
                ))}

                <div className='flex flex-col my-3'>

                    <button
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full "
                        onClick={() => window.location.href = signupButton.href}
                    >
                        {signupButton.label}
                    </button>

                    {children}

                </div>
            </nav>


        </header>
    );
};

export default Header;
