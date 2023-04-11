import gsap from 'gsap'
import { useEffect, useState } from 'react'
import styles from '../styles/Astronics/Astronics.module.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const BaseProducts = ({title_1,text_1,image_1,text_2,image_2, text_3,title_3,image_4,text_5, num1, num2, num3, num4})=> { 

const [widthDisplay, setWidthDisplay] = useState("")
const [validation, setValidation] = useState(false)


    const ChangeCard = (id1,id2)=> { 
        let a = window.innerWidth
        if (a <= 821 && a>790){ 
            setWidthDisplay(1200)
        }
        else if (a <= 790 && a>650){ 
            setWidthDisplay(1210)
        }
        else if (a<=650 && a>450) { 
            setWidthDisplay(910)
        }
        else if (a<=450 && a>380){
            setWidthDisplay(870)
        }
        else if (a<=380){
            setWidthDisplay(820)
        }
        else{ 
            setWidthDisplay(850)
        }     
        setValidation(true)
        if (validation === true){ 
            ChangeCard_2(id1,id2)
        }
    }

    
    const ChangeCard_2 = (id1,id2)=> { 
        let tl1 = gsap.timeline({ 
            repeat:0,
        })
        tl1.to("#"+id1, { 
            duration:0.5, 
            marginLeft: widthDisplay,
        })
        tl1.to("#"+id2,{ 
            duration:0.2, 
            boxShadow: "2px 2px 10px 2px #0000001f",
        })
    }

    const OffChangeCard = (id1,id2)=> { 
        let tl1 = gsap.timeline({ 
            repeat:0,
        })
        tl1.to("#"+id1, { 
            duration:0.5, 
            marginLeft: 0,
        })
        tl1.to("#"+id2,{ 
            duration:0.2, 
            boxShadow: "none",
        })

    }
    return ( 
        <>
            <div className={styles.productLeft}>
                    <div className={styles.productLeftText}>
                        <div className={styles.productInTwoCards_2}>
                            <div className={styles.ctnCardFirst} id="Car2_1R8200"> 
                                <div className={styles.ctnTitlePrduct}>
                                    <h1>{title_1}</h1>
                                    <h3>{text_1}</h3>
                                </div>
                                <img src={image_1} alt="" width={350} height={250}></img>
                            </div>
                        </div>
                    </div>
                        <div className={styles.productLeftText_22}>
                            <div className={styles.productInTwoCards} onMouseLeave={()=>{OffChangeCard("ctnCardSecond_2","productLeftText_2")}} id="ctnCardSecond_2">
                                <div className={styles.ctnCardSecond} id="Car1_1R8200">
                                    <Card2 title_3={title_3} image_4={image_4} text_5={text_5} num3={num3} num4={num4}/>
                                    <div className={styles.arrowBackCard} onClick={()=>{OffChangeCard("ctnCardSecond_2","productLeftText_2")}}>
                                        <KeyboardDoubleArrowRightIcon/>
                                    </div>
                                </div>
                                <div className={styles.ctnCardFirst_2} onMouseMove={()=>{ChangeCard("ctnCardSecond_2","productLeftText_2")}} id="Car2_1R8200">
                                    <p className={styles.textR8200}>{text_2}</p>
                                    <img className={styles.img2R8200} src={image_2} alt="" width={num1} height={num2}></img>
                                    <p className={styles.textR8200_2}>{text_3}</p> 
                                    <div className={styles.arrowNextCard} onClick={()=>{ChangeCard("ctnCardSecond_2","productLeftText_2")}}>
                                        <KeyboardDoubleArrowLeftIcon/>
                                    </div>
                                </div>
                            </div>                 
                        </div>
                </div>
        </>
    )
}


const Card2 = ({title_3,image_4,text_5, num3, num4})=> { 
    return (
    <div className={styles.productLeftText_2} id="productLeftText_2">
        <div className={styles.ctnTitlePrduct_2}>
            <h3>{title_3}</h3>
        </div>
        <img className={styles.ImageCardCarousel} src={image_4} alt="" width={num3} height={num4}></img>
        <p className={styles.textR8200_3}>{text_5}</p>
    </div>
    )
}

export default BaseProducts