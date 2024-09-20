import React, { useState } from "react";
import styles from "./card.module.css";

const Card = (props: any) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // Função para fechar o modal ao clicar fora dele
    const handleOutsideClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    return (
        <>
            <div className={styles.card} onClick={openModal}>
                <div className={styles.imgContainer}>
                    <img
                        src={props.imagem}
                        alt="imagem ilustrativa"
                        className={styles.imagem}
                    />
                </div>
                <h1 className={styles.title}>{props.titulo}</h1>
                <p className={styles.description}>{props.texto}</p>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={handleOutsideClick}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            &times; {/* X símbolo para o botão fechar */}
                        </button>
                        <img src={props.foto} alt="imagem do modal" className={styles.modalImage} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
