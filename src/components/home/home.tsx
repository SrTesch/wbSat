import styles from "./home.module.css"
import CarImage from "../../assets/carBlack.png"
export default function Home(){
    return(
        <div className={styles.homeSection} id="home">
            <div className={styles.aux}><img src={CarImage} alt="carro ilustrativo" className={styles.teste} id="Car" /></div>
            <div className={styles.content}>
                <h1>Explore</h1>
                <p>Aguardamos a oportunidade de trabalhar em parceria com você e contribuir para o crescimento contínuo de sua empresa</p>
            </div>
        </div>
    )
}