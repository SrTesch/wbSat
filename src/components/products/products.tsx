import styles from './products.module.css'
import Card from '../card'
import Imagem1 from "../../assets/logo2.png"
import OntrackingImage from "../../assets/ontracking.png"
export default function Products(){
    return(
        <div className={styles.productSection} id="productSection">
            <h1 className={styles.title} id='titleCards'>Serviços oferecidos</h1>
            <div className={styles.products}>
                <Card 
                    titulo="OnTracking"
                    texto="Sistema de gerenciamento de rotas incrível sem defeitos"
                    imagem={OntrackingImage}
                    detailedText="Este é um sistema que visa gerenciar cada rota em que o automóvel passou"
                    
                />
                <Card 
                    titulo="OnPatrol"
                    texto="Gerenciamento de patrulhas/Rondas de forma revolucionária"
                    detailedText="Nesta Funcionalidade, temos controle de onde o funcionário está e ele deve fazer o check-in de acordo com a sua necessidade, usando um qrCode específico"
                    imagem={Imagem1}
                />
                <Card 
                    titulo="OnDriving"
                    texto="Sistema que avalia o comportamento do condutor de forma inteligente"
                    detailedText="Eu sou lindo"
                    imagem={Imagem1}
                />
            </div>
        </div>
    )
}