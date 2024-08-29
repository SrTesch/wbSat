import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealComponent (){
    useEffect(()=>{
        const sr =  ScrollReveal({
            duration: 900,
            reset: false
        })
        
        const rs =  ScrollReveal({
            duration: 2000,
            reset: false
        })
        sr.reveal('#footer', {distance: '40px', delay: 50, origin: 'left' })
        sr.reveal('#card', {distance: '40px', delay: 50, origin: 'right' })
        sr.reveal('#titleCards', {distance: '40px', delay: 50, origin: 'left' })
        sr.reveal('#titleHome', {distance: "40px", origin: "top"})
        sr.reveal('#textHome', {distance: "40px", origin: "bottom"})
        sr.reveal('.nav-list', {distance: "20px", origin: "right"})
        rs.reveal('#Car', {distance: '300px', delay: 0, origin: 'right' })

    }, []);
};
