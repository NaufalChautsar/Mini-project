import React from 'react';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="border-b font-bold p-3 px-5 flex justify-between items-center sticky top-0 shadow-sm bg-white">
            <span className="font-bold">Naufal Chautsar</span>
            <Navigation />
        </header>
    );
}

export default Header;
