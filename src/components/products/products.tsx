import styles from './products.module.css'
import Card from '../card'
//import Imagem1 from "../../assets/logo2.png"
//import productsImg from "../../assets/products.png"
import platImg from "../../assets/platimg.png"
import cardsContent from './productsContent'
export default function Products(){
    return(
        <div className={styles.productSection} id="productSection">
            <h1 className={styles.title} id='titleCards'>Serviços oferecidos</h1>
            <div className={styles.products} id='products'>
                {/*
                <img src={productsImg}/>
            */}
            {cardsContent.map((val:any, key:any)=>{
                console.log(key)
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
                {/*
                
                <Card 
                    titulo="OnTracking"
                    texto="Plataforma de rastreamento por GPS"
                    imagem={OntrackingImage}
                    className="teste"
                    />
                    <Card 
                    titulo="App Tracker"
                    texto="Digitalização de tarefas e serviços de campo"
                    imagem={apptrackerImage}
                    className="teste"
                    />
                    <Card 
                    titulo="OnAlert"
                    texto="Centro de Monitoramento"
                    imagem={onAlertImage}
                    className="teste"
                    />
                    <Card 
                    titulo="OnWall"
                    texto="Monitoramento de multiplos ativos"
                    imagem={Imagem1}
                    className="teste"
                />
                <Card 
                    titulo="OnRoad"
                    texto="Rotas multidestino sem planejamento"
                    imagem={Imagem1}
                    className="teste"
                    />
                    <Card 
                    titulo="OnRouting"
                    texto="Planejamento de rotas multidestino"
                    imagem={Imagem1}
                    className="teste"
                    />
                    <Card 
                    titulo="OnReport"
                    texto="Sistema de relatórios"
                    imagem={Imagem1}
                    className="teste"
                    />
                    <Card 
                    titulo="OnTool"
                    texto="Manutenção de Frotas"
                    imagem={Imagem1}
                    className="teste"
                    />
                */}
            </div>
            <div className={styles.products}>
                <img src={platImg}/>
            </div>
        </div>
    )
}