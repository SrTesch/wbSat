import { useState } from "react";
import "./header.css";
import Logo from '../../assets/logo.png';

export default function Header() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    const navList = () => {
        setMenuAtivo(!menuAtivo);
        console.log("Estado do menu:", menuAtivo); // Verificando se o estado está alternando
    };

    return (
        <header className='header'>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <a className='link-nome' href='#home'><img src={Logo} className="eusoulindo" alt="Logo" /></a>
                </div>
                <nav>
                    <div className="mobile-menu" onClick={navList}>
                        <div className='line'></div>
                        <div className='line'></div>
                        <div className='line'></div>
                    </div>
                    <div className={menuAtivo ? 'nav-list nav-active' : 'nav-list'}>
                        <a href='#home' className='link-topo link-home'>Home</a>
                        <a href='#products' className='link-topo'>Serviços</a>
                        <a href='#footer' className='link-topo'>Contato</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
