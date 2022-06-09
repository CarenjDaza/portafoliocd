import About from "../components/aboutme/About-me";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import '../index.css'

function Aboutme(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    )
}

export default Aboutme;