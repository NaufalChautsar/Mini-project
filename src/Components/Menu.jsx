import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
    return (
        <div className="p-5">
            <ul>
                <li>
                    <Link
                        to="/"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about"
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
