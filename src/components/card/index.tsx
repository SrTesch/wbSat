import styles from "./card.module.css"

const Card = (props:any) =>{
    // const link = `https://wa.me/5521959042682?text=Olá${props.titulo}`

    return(
        <div className={styles.card} id="card">
            <img src={props.imagem} alt="imagem ilustrativa" className={styles.imagem} />
            
            <h1 className={styles.title}>{props.titulo}</h1>
            <p className={styles.description}>
                {props.texto}
            </p>
            <p className={styles.price}>R${props.price},00/mês </p>
            <a href="https://wa.me/5521959042682?text=Olá" className={styles.cta}>Contatar</a>
        </div>
    )
}

export default Card;