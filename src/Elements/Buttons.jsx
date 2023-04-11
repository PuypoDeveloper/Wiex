import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Elements.module.css'
import LoginIcon from '@mui/icons-material/Login';
import AddIcon from '@mui/icons-material/Add';
import gsap from 'gsap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

/** BOTON HEADER */
export const BtnHeader = ({text})=> { 
    return( 
        <button className={styles.BtnHeader}>
            {text}
        </button>
    )
}

/**BOTONES APPS */

export const BtnApps = ({text})=> { 
    return( 
        <button className={styles.btnApps}>
            {text}
        </button>
    )
}

/**BOTON LOGIN EN HOME */

export const BtnLoginApps = ({text})=> { 
    return ( 
        <button className={styles.btnLoginApps}>
            <LoginIcon className={styles.iconBtnLogin}/>
            {text}
        </button>
    )
}

/**BOTONES FORMULARIO LOGIN */

export const BtnIntLogin = ({text})=> { 
    return ( 
        <div className={styles.ctnBtnSignIn}>
            <button>{text}</button>
        </div>
    )
}

export const BtnArrowBack = ()=> { 
    return ( 
        <div className={styles.arrowBack}>
            <ArrowBackIcon/>
        </div>
    )
}

export const BtnCloseX = () => { 
    return ( 
        <div className={styles.iconClose}>
            <CloseIcon/>
        </div>
    )
}

/**BOTONS DE PARTNERS */

 /** FUNCION CAMBIO DE ESTILO BOTONES */

 const AnimationGetIn = (id, color)=> { 
    let tl1 = gsap.timeline({ 
        repeat:0, 
    })
    tl1.to(("#"+id), { 
        duration: 0.4, 
        scale: 1.05, 
        backgroundColor: color, 
        color: "#233F66", 
    })
}

const OffAnimationGetIN = (color,id)=> { 
    let tl1 = gsap.timeline({ 
        repeat:0, 
    })
    tl1.to(("#"+id), { 
        duration: 0.4, 
        scale: 1, 
        backgroundColor: color, 
    })
}

export const BtnAstronics = ()=> { 
    return ( 
        <Link href="/Astronics" className={styles.btnAstronics}>
        <button className={styles.btnPartnerAstronics} id="btnPartnerAstronics" onMouseMove={()=>{AnimationGetIn("btnPartnerAstronics","#45556D")}} onMouseLeave={()=>{OffAnimationGetIN("#233F66","btnPartnerAstronics")}}>
                <Image src="/img/Astronics/logo.svg" alt="" width={100} height={100} className={styles.IconsGetInBtn}/>
                <div className={styles.ctnViewMore}>
                    <AddIcon/>
                </div>
        </button>
         </Link>
    )
}

export const BtnCopperMountain = ()=> { 
    return ( 
        <Link href="/CopperMountain" className={styles.btnCopperMountain}>
            <button className={styles.btnPartnerCopperMountain} id="btnPartnerCopperMountain" onMouseMove={()=>{AnimationGetIn("btnPartnerCopperMountain","#325F46")}} onMouseLeave={()=>{OffAnimationGetIN("#0B572E","btnPartnerCopperMountain")}}>
                    <img src="/img/CopperMountain/logo.png" alt="" width={150} height={40} className={styles.IconsGetInBtn_2}/>
                    <div className={styles.ctnViewMore2}>
                        <AddIcon/>
                    </div>
            </button>
        </Link>
    )
}