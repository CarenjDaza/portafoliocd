import { Link } from 'react-router-dom';
import './Navbar-home.css';

function Navbarhome(){
    return(
        <div>
            <nav >
                <Link to="/" className='home-item'><i class="fa-solid fa-house"></i></Link>
                <Link to="/about-me" className='home-item item2'><i className="fa-solid fa-person-dress"></i></Link>
                <Link to="/jobs" className='home-item'><i className="fa-solid fa-suitcase"></i></Link>
                <Link to="/skills" className='home-item'><i className="fa-solid fa-paintbrush"></i></Link>
                <Link to="/studies" className='home-item'><i className="fa-solid fa-graduation-cap"></i></Link>
            </nav>
        </div>
    );
}

export default Navbarhome;