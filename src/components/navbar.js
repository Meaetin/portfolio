import { useState } from 'react';
import './styles/navbar.css'; 
import { Outlet, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const toggleClick = () => {
        const nav = document.getElementById('nav');
        const btn = document.getElementById('btn');

        if (toggleMenu) {
            nav.classList.add("reverse");
            btn.classList.add('ri-menu-line')
            btn.classList.remove('ri-close-line')
            setToggleMenu(!toggleMenu);
        } else {
            nav.classList.remove("reverse")
            nav.style.display = "flex";
            btn.classList.remove('ri-menu-line')
            btn.classList.add('ri-close-line')
            setToggleMenu(!toggleMenu)
        }
    }

    return (
        <div className="flex justify-center relative font-normal flex-col">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
            <div className='navbar mt-10'>
                <i className="menu ri-menu-line hidden" id='btn' onClick={toggleClick}></i>
                <ul className="list show flex justify-center text-2xl gap-16 italic" id='nav'>
                    <li onClick={toggleClick}><NavLink activeclassname="active" to="/">home</NavLink></li>
                    <li onClick={toggleClick}><NavLink activeclassname="active" to="about">about</NavLink></li>
                    <li onClick={toggleClick}><NavLink activeclassname="active" to="skills">skills</NavLink></li>
                    <li onClick={toggleClick}><NavLink activeclassname="active" to="projects">projects</NavLink></li>
                    <li onClick={toggleClick}><NavLink activeclassname="active" to="contact">contact</NavLink></li>      
                </ul>
                <Outlet />
            </div>
        </div>
    );
}
 
export default Navbar;