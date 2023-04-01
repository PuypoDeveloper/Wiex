import gsap from 'gsap'
import React, { use, useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { functionCard } from './Astronics/CardsAstronics'
import { functionCard_2 } from './CopperMountain/CardsCopperMountain'
import { BtnApps, BtnAstronics, BtnCopperMountain, BtnLoginApps } from './Elements/Buttons'
import { Barlow } from '@next/font/google'
import Image from 'next/image'
import { Login } from './Login/Login'
import Link from 'next/link'
import useModal from './hooks/useModal'
import { ForgotPassword } from './Login/forgotPassword'
import useModalForgot from './hooks/useModalForgot'
import { NewPassword } from './Login/newPassword'
import { ValidAcount } from './Login/validAcount'
import useModalValidAcount from './hooks/useModalValidAcount'
import useModalNewPassword from './hooks/useModalNewPassword'
import { CreateAccount } from './Login/createAccount'
import useModalCreateAccount from './hooks/useModalCreateAccount'
import { IconsLoginAlarm, IconsLoginGPS, IconsLoginRMA } from './Elements/IconsLogin'
import useModalInput from './hooks/useModalInputLogin'



const inter = Barlow ({ 
    subsets: ["latin"], 
    weight: ["100","200","300","400","500","600","700","800","900"]
})


export const Home = ()=> { 

    /**CARDS ASTRONICS */

    const Card_1_Astronics = functionCard["getR8000C"]
    const Card_2_Astronics = functionCard["getR8100"]
    const Card_3_Astronics = functionCard["getR8200"]
    const Card_4_Astronics = functionCard["getR8600"]


    /**CARDS COPPER */
    const Card_1_Copper = functionCard_2["getPRODUCT1"]
    const Card_2_Copper = functionCard_2["getPRODUCT2"]
    const Card_3_Copper = functionCard_2["getPRODUCT3"]
    const Card_4_Copper = functionCard_2["getPRODUCT4"]

    /**MOVIMIENTO DEL CARRUSEL */

    useEffect(()=> { 
        let tl1 = gsap.timeline({ 
            repeat: Infinity
        })
        let tl2 = gsap.timeline({ 
            repeat: Infinity
        })
        tl1.to("#carousel_1", { 
            duration: 40, 
            y: -740,
            ease: "linear",
        })
        tl2.to("#carousel_1", { 
            duration: 40,
            y: -740,
            ease: "linear",
        
        })
    },[]) 

    useEffect(()=> { 
        let tl1 = gsap.timeline({ 
            repeat: Infinity
        })
        let tl2 = gsap.timeline({ 
            repeat: Infinity
        })
        tl1.to("#carousel_2", { 
            duration: 40, 
            y: -740,
            ease: "linear",
        })
        tl2.to("#carousel_2", { 
            duration: 40,
            y: -740,
            ease: "linear",
        
        })
    },[]) 

    /**FUNCIONES ANIMACION CARRUSEL */
    const AnimationCarousel = (id)=> { 
        let tl1 = gsap.timeline({ 
            repeat: 0,
        })
        tl1.to(("#"+id), { 
            duration: 0.3, 
            scale: 1.4,
            y: -10
        })
        if (id === "IconCarouselHome_1"){ 
            document.getElementById("btnAstronics").style.display="flex"
            document.getElementById("carouselAstronics_1").style.display="flex"
            document.getElementById("carouselAstronics_2").style.display="flex"
            document.getElementById("btnCopperMountain").style.display="none"
            document.getElementById("carouselCopperMoutain_1").style.display="none"
            document.getElementById("carouselCopperMoutain_2").style.display="none"
        }
        else { 
            document.getElementById("btnCopperMountain").style.display="flex"
            document.getElementById("carouselCopperMoutain_1").style.display="flex"
            document.getElementById("carouselCopperMoutain_2").style.display="flex"
            document.getElementById("btnAstronics").style.display="none"
            document.getElementById("carouselAstronics_1").style.display="none"
            document.getElementById("carouselAstronics_2").style.display="none"
        }



    }
    const AnimationCarouselOff = (id)=> { 
        let tl1 = gsap.timeline({ 
            repeat: 0,
        })
        tl1.to(("#"+id), { 
            duration: 0.3, 
            scale:1,
            y: 0
        })
    }

      /**FUNCIONES ANIMACION BOTONES */

        const changeScaleIcons = (id)=> { 
            let tl1 = gsap.timeline({
                repeat:0
            })
            let tl2 = gsap.timeline({
                repeat:0
            })
            tl1.to("#"+id, {
                duration: 0.3, 
                scale: 1.2
            })
        }
        const changeScaleIconsOff = (id)=> { 
            let tl1 = gsap.timeline({
                repeat:0
            })
            let tl2 = gsap.timeline({
                repeat:0
            })
            tl1.to("#"+id, {
                duration: 0.3, 
                scale: 1
            })
        }

    
    /**FUNCION ACTIVAR Y DESACTIVAR LOGIN */



    const [isOpenLogin, OpenModalLogin, CloseModalLogin] = useModal(); 
    const [isOpenForgot, OpenModalForgot, CloseModalForgot] = useModalForgot(); 
    const [isOpenValid, OpenModalValid, CloseModalValid] = useModalValidAcount(); 
    const [isOpenNew, OpenModalNew, CloseModalNew] = useModalNewPassword(); 
    const [isOpenCreate, OpenModalCreate, CloseModalCreate] = useModalCreateAccount();
    
    const [input, setInput] = useState(false)
    const OpenInput = () => {
        setInput(true)
    } 


    return ( 
        <>
            <main className={styles.ctnMainHome} id="ctnMainHome">
                <section className={styles.ctnBoxLeft}>
                    <div className={styles.boxLeft}>
                        <div className={styles.textBoxLeft}>
                            <h2>Start a new proyect with</h2>
                            <img  width={300} height={120} src="/img/icons/LogoSvgsinmarco.svg" alt="" srcSet="" />
                            <p></p>
                        </div>
                        <div className={styles.appsBoxLeft}>
                            <h2 className={inter.className}>Apps</h2>
                            <div className={styles.apps}>
                                <div onClick={()=>{
                                    OpenModalLogin()
                                    OpenInput()
                                    }}>
                                    <IconsLoginGPS onClick={OpenModalLogin}/>
                                </div>
                                <div onClick={()=>{
                                    OpenModalLogin()
                                    OpenInput()
                                    }}>
                                    <IconsLoginAlarm onClick={OpenModalLogin}/>
                                </div>
                                <div onClick={()=>{
                                    OpenModalLogin()
                                    OpenInput()
                                    }}>
                                    <IconsLoginRMA onClick={OpenModalLogin}/>
                                </div>
                            </div>
                            <div className={styles.btnLoginApps} id="btnLoginApps" onClick={OpenModalLogin}>
                                <BtnLoginApps text={`Login`}/>
                            </div>
                        </div>
                        <div className={styles.partnersLeft} >
                            <p className={styles.partnersText}>PARTNERS</p>
                            <main className={styles.main}>
                                <div className={styles.iconsAvaliable_2}>
                                    <Link href={"/Astronics"} className={styles.IconCarouselHome_1} id="IconCarouselHome_1" onMouseMove={()=>{AnimationCarousel("IconCarouselHome_1","invert(20%) sepia(97%) saturate(347%) hue-rotate(173deg) brightness(92%) contrast(95%)")}} onMouseLeave={()=>{AnimationCarouselOff("IconCarouselHome_1")}}>
                                        <Image className={styles.imgCarousel} width={120} height={80} src="/img/Astronics/logo.svg" alt="" srcSet=""  />
                                    </Link>
                                    <Link href={"/CopperMountain"} className={styles.IconCarouselHome} id="IconCarouselHome_2" onMouseMove=    {()=>{AnimationCarousel("IconCarouselHome_2")}} onMouseLeave={()=>{AnimationCarouselOff("IconCarouselHome_2")}}>
                                        <Image className={styles.imgCarousel} width={120} height={80} src="/img/icons/LogoCopper.svg" alt="" srcSet="" />
                                    </Link>
                                </div>
                            </main>
                        </div>
                    </div> 
                </section>
                <section className={styles.ctnBoxRigth}>
                    <div className={styles.boxRigth}>
                        <div className={styles.btnBoxRight}>
                            <div className={styles.btnAstronics} id="btnAstronics">
                                <BtnAstronics/>
                            </div>
                            <div className={styles.btnCopperMountain} id="btnCopperMountain">
                                <BtnCopperMountain/>
                            </div>
                        </div>
                        <div className={styles.carouselBoxRigth}>
                            <div className={styles.carousel_1} id="carousel_1">
                                <div className={styles.carouselAstronics} id="carouselAstronics_1">
                                    <Card_1_Astronics/>
                                    <Card_2_Astronics/>
                                    <Card_3_Astronics/>
                                    <Card_4_Astronics/>
                                </div>
                                <div className={styles.carouselCopperMoutain} id="carouselCopperMoutain_1">
                                    <Card_1_Copper/>
                                    <Card_2_Copper/>
                                    <Card_3_Copper/>
                                    <Card_4_Copper/>
                                </div>
                            </div>
                            <div className={styles.carousel_2} id="carousel_2">
                                <div className={styles.carouselAstronics} id="carouselAstronics_2">
                                    <Card_1_Astronics/>
                                    <Card_2_Astronics/>
                                    <Card_3_Astronics/>
                                    <Card_4_Astronics/>
                                </div>
                                <div className={styles.carouselCopperMoutain} id="carouselCopperMoutain_2">
                                    <Card_1_Copper/>
                                    <Card_2_Copper/>
                                    <Card_3_Copper/>
                                    <Card_4_Copper/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Login 
                        isOpen={isOpenLogin} 
                        CloseModal={CloseModalLogin}
                        OpenNext={OpenModalForgot}
                        OpenCreate={OpenModalCreate}
                        input={input}
                    />

                    <ForgotPassword
                        isOpen={isOpenForgot}
                        CloseModal={CloseModalForgot}
                        OpenBack={OpenModalLogin}
                        OpenNext={OpenModalValid}
                    />
                    <ValidAcount 
                        isOpen={isOpenValid}
                        CloseModal={CloseModalValid}
                        OpenBack={OpenModalForgot}
                        OpenNext= {OpenModalNew}
                    />
                    <NewPassword
                        isOpen={isOpenNew}
                        CloseModal={CloseModalNew}
                        OpenBack={OpenModalValid}
                    />
                    <CreateAccount
                        isOpen={isOpenCreate}
                        CloseModal={CloseModalCreate}
                        OpenBack={OpenModalLogin}
                    />
                </section>
            </main>
        </>
    )
}