import foto1 from "../../assets/apptrackerfotos/01.jpg"
import foto2 from "../../assets/apptrackerfotos/02.jpg"
import foto3 from "../../assets/apptrackerfotos/03.jpg"
import foto4 from "../../assets/apptrackerfotos/04.jpg"
import foto5 from "../../assets/apptrackerfotos/05.jpg"
import foto6 from "../../assets/apptrackerfotos/06.jpg"
import foto7 from "../../assets/apptrackerfotos/07.jpg"
import foto8 from "../../assets/apptrackerfotos/08.jpg"
import foto9 from "../../assets/apptrackerfotos/09.jpg"
import foto10 from '../../assets/apptrackerfotos/10.jpg'

import styles from "./apptracker.module.css"
export default function AppTracker(){
    return(
        <div className={styles.Construção}>
            <div className={styles.imagens}>
                <img src={foto1} alt="" className={styles.foto}/>
                <img src={foto2} alt="" className={styles.foto} />
            </div>
            <div className={styles.imagens}>
                <img src={foto3} alt="" className={styles.foto}/>
                <img src={foto4} alt="" className={styles.foto} />
            </div>
            <div className={styles.imagens}>
                <img src={foto5} alt="" className={styles.foto}/>
                <img src={foto6} alt="" className={styles.foto} />
            </div>
            <div className={styles.imagens}>
                <img src={foto7} alt="" className={styles.foto}/>
                <img src={foto8} alt="" className={styles.foto} />
            </div>
            <div className={styles.imagens}>
                <img src={foto9} alt="" className={styles.foto}/>
                <img src={foto10} alt="" className={styles.foto} />
            </div>
        </div>
    )
}