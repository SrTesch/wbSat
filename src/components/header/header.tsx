import { useState } from "react";
import "./header.css";
import Logo from '../../assets/logo.png';

export default function Header() {
    const [menuAtivo, setMenuAtivo] = useState(false); // Usar um booleano para simplificar

    const navList = () => {
        setMenuAtivo(!menuAtivo); // Alterna entre true e false
        console.log("Menu ativo: ", menuAtivo); // Verifique o valor no console
    };

    return (
        <header className='header'>
            <div className='limitar-secao navbar'>
                <div className='nome-topo'>
                    <a className='link-nome' href='#home'><img src={Logo} className="eusoulindo" alt="Logo" /></a>
                </div>
                <nav>
                    {/* Botão hamburger */}
                    <div className="mobile-menu" onClick={navList}>
                        <div className='line1'></div>
                        <div className='line1'></div>
                        <div className='line1'></div>
                    </div>
                    {/* Classe alterna com base no estado */}
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
