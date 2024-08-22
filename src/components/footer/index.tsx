import { useState } from "react"
import styles from "./footer.module.css"
import Logo from '../../assets/logo.png';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer(){
    const [email, setEmail] = useState('');
    const sendEmail = (e:any) =>{
        e.preventDefault();
        console.log(`Tentando enviar o email ${email} para o banco de dados!`);
        
    }
    return (
        <footer className={styles.footer} id="footer">
            <div className={styles.logo}>
                <img src={Logo} alt="Logo" className={styles.logoImg}/>
            </div>
            <div className={styles.contact}>
                <a href="https://wa.me/5521959042682?text=Olá"
                className={styles.contactItem}
                id={styles.number}
                target="_blank"
                >
                    <span className={styles.icones}><WhatsAppIcon fontSize="small"/></span> (21)95904-2682
                </a>
                <a
                    className={styles.contactItem}
                    id={styles.email}
                    href="mailto:wbsat.gestaodefrotas@gmail.com"
                >
                    <span className={styles.icones}><EmailIcon fontSize="small"/></span>wbsat.gestaodefrotas@gmail.com
                </a>
                
                <a
                    className={styles.contactItem}
                    id={styles.endereço}
                    href="https://maps.app.goo.gl/h3fRYwk7zwR3JriE6"
                    target="_blank"
                >
                    <span className={styles.icones}><LocationOnIcon /></span>R. Lázaro Cádenas, 16 - Santa Cruz da Serra, Duque de Caxias - RJ, 25255-050, Brazil
                </a>
                
                <div className={styles.contact}>
                    <h1>Conecte-se conosco!</h1>
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
                        <button type="submit" id={styles.submitbutton}>Inscrever-se</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}