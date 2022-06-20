import classes from "./NavBar.module.css";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className={classes.header}>
            <div className={classes.title}><Link to="/">Picture Palooza</Link></div>
            <nav className={classes.nav}>
                <ul className={classes.list}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                    <li><Link to='/about'>About</Link></li>


                </ul>

            </nav>


        </header>
    );
}

export default NavBar;