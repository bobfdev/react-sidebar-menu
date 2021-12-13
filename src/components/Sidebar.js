import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
// {} are needed because didn't use default on the SidebarData.js file and left it as regular  
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import './Sidebar.css';

function Sidebar() {
    // useState is set to 'false' so the sidebar is not showing as the default
    const [sidebar, setSidebar] = useState(false)
    // setSidebar to opposite of default, so it is showing
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        {/* IconContext.Provider sets all the icons (when wrapped) to white as the default color */}
        <IconContext.Provider value={{ color: '#fff' }}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaBars onClick={showSidebar} /> 
                </Link>
            </div>   
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar;
