import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealComponent (){
    useEffect(()=>{
        const sr =  ScrollReveal({
            duration: 900,
            reset: true
        })
        
        sr.reveal('#footer', {distance: '40px', delay: 50, origin: 'left' })
        sr.reveal('#card', {distance: '40px', delay: 50, origin: 'right' })
        sr.reveal('#titleCards', {distance: '40px', delay: 50, origin: 'left' })

    }, []);
};
