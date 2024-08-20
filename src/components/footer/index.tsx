import styles from "./footer.module.css"

export default function Footer(){
    return (
        <footer className={styles.footer}>
            <div>WBSat</div>
            <div className={styles.contact}>
                <span className={styles.contactItem} id={styles.number}>(021)982522690</span>
                <span className={styles.contactItem} id={styles.email}>wbsat@gmail.com</span>
                <span className={styles.contactItem} id={styles.endereço}>rua bali, 260 - Jd.Olimpo / RJ</span>
            </div>
        </footer>
    )
}