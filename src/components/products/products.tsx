import styles from './products.module.css'
import Card from '../card'
import Imagem1 from "../../assets/logo.png"
export default function Products(){
    return(
        <div className={styles.productSection} id="productSection">
            <h1 className={styles.title} id='titleCards'>Serviços oferecidos</h1>
            <div className={styles.products}>
                <Card 
                    titulo="Pacote Simples"
                    texto="Pacote apenas com rastreamento incluso"
                    price="60"
                    imagem={Imagem1}
                    
                />
                <Card 
                    titulo="Pacote Médio"
                    texto="Pacote com rastreamento + telemetria simples"
                    price="90"
                    imagem={Imagem1}
                />
                <Card 
                    titulo="Pacote Complexo"
                    texto="Pacote com rastreamento + telemetria completa"
                    price="120"
                    imagem={Imagem1}
                />
            </div>
        </div>
    )
}