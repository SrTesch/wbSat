import styles from "./home.module.css"

export default function Home(){
    return(
        <div className={styles.homeSection} id="home">
            <div className={styles.aux}></div>
            <div className={styles.content}>
                <h1>Explore</h1>
                <p>Venha descobrir sobre uma gestão inteligente de frotas!</p>
            </div>
        </div>
    )
}