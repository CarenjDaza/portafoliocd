import { Link } from "react-router-dom";
import { getAllStudies } from "../../Studybase";
import './School.css';
import '../aboutme/About-me.css';

function School(){
    const study=getAllStudies();
    return(
        <div className='about'>
            <h3>EDUCACIÓN</h3>
            <hr />
            <div>
            
            <ul className='listajob'>
                {study.map(est=>
                    <div className='jobs'>
                    <i class="fa-solid fa-user-graduate"></i>
                    <li key={est.id} className="lista">
                        <div >
                        <strong>{est.titulo}</strong>
                        </div>
                        <div className='lista1'>
                        {est.instituto}
                        </div>
                        <Link to={`${est.id}` } className="btn">Ver mas</Link>
                    </li>
                    </div>)}
            </ul>
            </div> 
            <hr />
        </div>
    )
}

export default School;
    