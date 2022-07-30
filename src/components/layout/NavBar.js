import "./NavBar.css";
import { Link } from 'react-router-dom';
import { useState } from "react";

function NavBar() {

    const [nav, setNav] = useState(false);

    const showNav = () => {
        setNav(!nav);
    }


    return (
        <header className='header'>
            <div className='title'>
                <Link to="/">Picture Palooza</Link>
                <span className='hamIcon'>
                    <button onClick={showNav}><i className="fa fa-bars"></i></button>
                </span>
            </div>

            <nav className={nav ? "expand" : "nav"}>
                <ul className='list'>
                    <li onClick={showNav}><Link to='/'>Home</Link></li>
                    <li onClick={showNav}><Link to='/search'>Search</Link></li>
                    <li onClick={showNav}><Link to='/about'>About</Link></li>


                </ul>

            </nav>




        </header>
    );
}

export default NavBar;