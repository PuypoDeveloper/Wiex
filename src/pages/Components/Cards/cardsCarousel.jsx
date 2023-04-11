import Image from 'next/image'
import { gsap, random } from "gsap" ; 
import React, { useState, useEffect } from 'react';
import styles from '../../../styles/Cards/Cards.module.css'

const Cards = ({image, title,text,image_2})=>{ 

    return ( 
        <div className={styles.ctnCards} id="ctnCardsId">
                <div className={styles.imageCard}>
                    <img className={styles.imageCard_1} src={image} alt="" width={120} height={120} /> 
                </div>
                <div className={styles.TextCard} >
                    <div className={styles.titleCardSIcon}>
                        <h5>{title}</h5>
                    </div>
                    <div className={styles.priceShoe}>
                        <div className={styles.cntcircle}>
                            <p>{text}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.logoAastronics}>
                    <img className={styles.LogoInCard} src={image_2} alt="" width={20} height={20} /> 
                </div>
                
        </div>
    )
}

export default Cards
