import foto1 from "../../assets/apptrackerfotos/01.jpg"
import foto2 from "../../assets/apptrackerfotos/02.jpg"
export default function Constr(){
    return(
        <div className="Construção">
            <div className="imagens">
                <img src={foto1} alt=""
                className="foto1"/>
                <img src={foto2} alt="" className='foto1' />
            </div>
        </div>
    )
}