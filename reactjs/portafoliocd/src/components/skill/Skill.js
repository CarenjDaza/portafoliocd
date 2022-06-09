import './Skill.css';

function Skill(){
    return(
        <div className='about'>
            <h3>HABILIDADES</h3>
            <hr />
            <div className="container">
            <div className="skill">
                <div>
                    <h3>Idiomas</h3>
                </div>
                <div className="cont1">
                    <p>Ingles</p><br/><p className="paragraph"><strong>60%</strong></p>
                    <p>Español</p><br/><p className="paragraph"><strong>100%</strong></p>
                </div>
            </div>
            <div className="skill">
                <div>
                    <h3>Habilidades</h3>
                </div>
                <ul className="cont1">
                    <li>Manejo de figma</li>
                    <li>Herramientas ofimaticas</li>
                    <li>Lenguaje HTML</li>
                    <li>Lenguaje JAVASCRIPT</li>
                    <li>Programación React</li>
                </ul>
            </div>
            <div className="skill">
                <div>
                    <h3>Cualidades</h3>
                </div>
                <ul className="cont1">
                    <li>Trabajo en equipo</li>
                    <li>Liderazgo</li>
                    <li>Empatía</li>
                    <li>Creatividad</li>
                    <li>Escucha activa</li>
                </ul>
            </div>
            </div>
            <hr />
        </div>

    )
}

export default Skill;