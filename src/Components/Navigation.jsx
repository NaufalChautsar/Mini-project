import React, { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTransition, animated } from '@react-spring/web';

import Menu from './Menu';

function Navigation() {
    const [showMenu, setShowMenu] = useState(false);
    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 1 },
        enter: { opacity: 1 },
        leave: { opacity: 1 },
    });

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>

            {showMenu &&
                menuTransitions((style) => (
                    <animated.div
                        style={style}
                        className="fixed bg-white top-[40px] left-0 w-4/5 min-w-full min-h-screen z-50 shadow">
                        <Menu closeMenu={() => setShowMenu(false)} />
                    </animated.div>
                ))}
        </nav>
    );
}

export default Navigation;
