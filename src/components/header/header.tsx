import { useState } from "react";
import "./header.css"
import Logo from '../../assets/logo.png'
export default function Header(){
    const [ativar, setAtivar] = useState("nav-list");
        const navList = () => {
            ativar === 'nav-list' ? setAtivar('nav-list nav-active') : setAtivar("nav-list");
        }
    return (
        <header className='header'>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <a className='link-nome' href='#home'><img src={Logo} className="eusoulindo"alt="" /></a>
                </div>
                <nav>
                    <div className="mobile-menu" onClick={navList}>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line2'></div>
                    </div>
                    <div className={ativar}>
                        <a href='#home' className='link-topo link-home'>Home</a>
                        <a href='#sobre' className='link-topo'>Serviços</a>
                        <a href='#skills' className='link-topo'>Skills</a>
                        <a href='#projetos' className='link-topo' >Projetos</a>
                        <a href='#footer' className='link-topo'>Contato</a>
                    </div>
                </nav>
            </div>
        </header>
    )
}