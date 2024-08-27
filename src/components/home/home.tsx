import styles from "./home.module.css"
import CarImage from "../../assets/carBlack.png"
export default function Home(){
    return(
        <div className={styles.homeSection} id="home">
            <div className={styles.aux}><img src={CarImage} alt="carro ilustrativo" id="Car" /></div>
            <div className={styles.content}>
                <h1>Explore</h1>
                <p>Venha descobrir sobre uma gestão inteligente de frotas!</p>
            </div>
        </div>
    )
}