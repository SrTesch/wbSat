import styles from "./home.module.css"

export default function Home(){
    return(
        <div className="HomeSection">
            <div className={styles.homeDiv}>
                <h1>Explore</h1>
                <p>Descubra nossas inovações!</p>
            </div>
        </div>
    )
}