import { useState } from "react"
import styles from "./footer.module.css"

export default function Footer(){
    const [email, setEmail] = useState('');
    const sendEmail = () =>{
        console.log("Tentando enviar o email para o banco de dados!");
    }
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>WBSat</div>
            <div className={styles.contact}>
                <span className={styles.contactItem} id={styles.number}>(021)982522690</span>
                <span className={styles.contactItem} id={styles.email}>wbsat@gmail.com</span>
                <span className={styles.contactItem} id={styles.endereço}>rua bali, 260 - Jd.Olimpo / RJ</span>
                <a href=""></a>
                <div className={styles.contact}>
                    <h1>Se conecte conosco!</h1>
                    <form onSubmit={sendEmail}>
                        <p>Coloque seu email *</p>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            className={styles.inputEmail}
                            value={email} 
                            onChange={e=>{setEmail(e.target.value)}}
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}