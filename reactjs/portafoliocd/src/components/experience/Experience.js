
import { Link } from 'react-router-dom';
import { getAllJobs } from '../../Basejobs';
import './Experience.css';

function Experience(){
    const jobs=getAllJobs();
    return (
        <div className='about'>
            <h3>EXPERIENCIA LABORAL</h3>
            <hr />
            <div>
            
            <ul className='listajob'>
                {jobs.map(jobs=>
                    <div className='jobs'>
                    <i class="fa-solid fa-display"></i>
                    <li key={jobs.id} className="lista">
                        <div >
                        <strong>{jobs.cargo}</strong>
                        </div>
                        <div className='lista1'>
                        {jobs.empresa}
                        </div>
                        <div className='lista1'>
                        {jobs.tiempo}
                        </div>
                        <Link to={`${jobs.id}` } className="btn">Ver mas</Link>
                    </li>
                    </div>)}
            </ul>
            </div> 
            <hr />
        </div>
    )
}

export default Experience;
