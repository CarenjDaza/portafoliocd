import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";

function Error(){
    return(
        <div>
            <Header/>
            <Navbar/>
            <h1> La pagina no ha sido encontrada. Error 404</h1>
            <Footer/>
        </div>
    )
}

export default Error;