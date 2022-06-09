import { Link } from 'react-router-dom';
import '../navbar/Navbar.css';

function Navbar(){
    return(
        <nav className='nav'>
            <Link to="/" className='item'><i class="fa-solid fa-house"></i>Home</Link>
            <Link to="/about-me" className='item'><i className="fa-solid fa-person-dress"></i>About me</Link>
            <Link to="/jobs" className='item'><i className="fa-solid fa-suitcase"></i>Jobs</Link>
            <Link to="/skills" className='item'><i className="fa-solid fa-paintbrush"></i>Skills</Link>
            <Link to="/studies" className='item'><i className="fa-solid fa-graduation-cap"></i>Studies</Link>
        </nav>
    );
}
export default Navbar;