import './About-me.css';
import foto from '../../assets/img/foto.svg';

function About() {
    return (
        <div className='about'>
            <h3>ACERCA DE MI</h3>
            <hr />
            <div className='text'>
            <p>Soy una persona dinámica, enfocada, persistente y bastante eficiente para realizar diversas 
            tareas, caracterizada por mi capacidad de absorber y retener conocimiento con mucha facilidad, 
            de igual manera por tener una gran determinación a la hora de asumir y afrontar nuevos retos, se 
            me facilita liderar, opinar y trabajar en grupo.</p>
            <div className="picture">
            <img src={foto} ></img>
            </div>
            </div>
            <hr />
        </div>
    );
}

export default About;