import '../Home.css';
import '../index.css';
import logo from '../assets/img/logo.svg';
import Navbarhome from '../components/navbar-home/Navbar-home';

function Home(){
    return(
        <div className="body">
            <h1>Mi portafolio </h1>
            <h2>Caren Johana Daza Peralta</h2>
            <img src={logo} className="logo"/>
            <Navbarhome/>
        </div>
    )
}

export default Home;