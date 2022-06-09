import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { getJob } from "../Basejobs";
import '../components/aboutme/About-me.css';

function Job(){
    const params=useParams();
    const exp=getJob(parseInt(params.id))
    return(
        <div>

            {params.id}
            <Header/>
            <Navbar/>
            <div className="about">
            <h3>EXPERIENCIA LABORAL</h3>
            <hr />
            </div>
            <div className="card">

                <h2>{exp.empresa}</h2>
                <p><strong>Cargo</strong><br/>{exp.cargo}</p>
                <p><strong>Jefe</strong><br/>{exp.jefe}</p>
                <p><strong>Telefono</strong><br/>{exp.telefono}</p>
                <p><strong>Tiempo</strong><br/>{exp.tiempo}</p>
                <p><strong>Funciones</strong><br/>{exp.funciones}</p>
            </div>
            <Footer/>
        </div>
    )
}

export default Job;