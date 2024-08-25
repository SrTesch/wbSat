import { useState } from "react";
import styles from "./card.module.css";

const Card = (props: any) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={`${styles.card} ${isFlipped ? styles.flipped : ""}`}
            onClick={handleFlip}
            id="card" //id para animação do scrollreveal
        >
            <div className={styles.front}>
                <img
                    src={props.imagem}
                    alt="imagem ilustrativa"
                    className={styles.imagem}
                />
                <h1 className={styles.title}>{props.titulo}</h1>
                <p className={styles.description}>{props.texto}</p>
                <button className={styles.cta}>Saiba mais</button>
            </div>
            <div className={styles.back}>
                <h1 className={styles.title}>{props.titulo}</h1>
                <p className={styles.detailedDescription}>
                    {props.detailedText}
                </p>
            </div>
        </div>
    );
};

export default Card;
