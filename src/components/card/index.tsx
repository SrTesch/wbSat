import styles from "./card.module.css"

const Card = (props:any) =>{
    return(
        <div className={styles.card} id="card">
            <img src={props.imagem} alt="" className={styles.imagem} />
            <h1>{props.titulo}</h1>
            {props.texto}
            <p>Investimento <br />R${props.price},00</p>
        </div>
    )
}

export default Card;