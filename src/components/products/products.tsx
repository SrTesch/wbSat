import styles from './products.module.css'
import Card from '../card'
import platImg from "../../assets/platimg.png"
import cardsContent from './productsContent'
export default function Products(){
    return(
        <div>
            <div className={styles.productSection} id="productSection">
                <h1 className={styles.title} id='titleCards'>Serviços oferecidos</h1>
                <div className={styles.products} id='products'>
                {cardsContent.map((val:any, key:any)=>{
                    key = "teste";
                    return(
                        <Card
                            titulo={val.titulo}
                            texto={val.texto}
                            imagem={val.img}
                            foto={val.foto}
                            className="teste"
                        />
                    )
                })}
                </div>
            </div>
                <div className={styles.imgPlat}>
                    <img src={platImg} className={styles.foto}/>
                </div>
        </div>
    )
}