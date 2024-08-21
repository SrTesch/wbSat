import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function ScrollRevealComponent (){
    useEffect(()=>{
        const sr =  ScrollReveal({
            duration: 900,
            reset: true
        })
        
        sr.reveal('.cartao', {distance: '40px', delay: 50, origin: 'left' })

    }, []);
};
