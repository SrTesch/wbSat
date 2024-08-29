import styles from "./home.module.css"
import CarImage from "../../assets/carBlack.png"
export default function Home(){
    return(
        <div className={styles.homeSection} id="home">
            <div className={styles.aux}><img src={CarImage} alt="carro ilustrativo" className={styles.teste} id="Car" /></div>
            <div className={styles.content}>
                <h1 id="titleHome">Explore o Futuro da Gestão de Frotas</h1>
                <p id="textHome">Impulsione a eficiência da sua frota com nossas soluções avançadas. Monitoramento em tempo real, relatórios detalhados e suporte contínuo para garantir que sua empresa esteja sempre à frente.</p>
            </div>
        </div>
    )
}