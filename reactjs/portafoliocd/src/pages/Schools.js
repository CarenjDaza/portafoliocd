import { useParams } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import '../Home.css';
import { getStudy } from "../Studybase";


function Study(){
    const params=useParams();
    const studies=getStudy(parseInt(params.id));
    return(
        <div>
            {params.id}
            <Header/>
            <Navbar/>
            <div className="about">
            <h3>EDUCACIÓN</h3>
            <hr />
            </div>
            <div className="card">

                <h2>{studies.titulo}</h2>
                <p><strong>Instituto</strong><br/>{studies.instituto}</p>
                <p><strong>Año</strong><br/>{studies.anio}</p>
            </div>
            <Footer/>

        </div>
    )
}

export default Study;