import styles from '../../../styles/Login/loginPrincipal.module.css'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BtnCloseX, BtnIntLogin } from '../../../Elements/Buttons';
import { IconsLoginAlarm, IconsLoginGPS, IconsLoginRMA } from '../../../Elements/IconsLogin';
import gsap from 'gsap';
import useModal from '../hooks/useModal';
import useModalInput from '../hooks/useModalInputLogin';


/** FORMULARIO LOGEO */

const Login =({isOpen, CloseModal, OpenNext, OpenCreate, input})=> {

    const CancelClickDivParent = (e)=> { 
         e.stopPropagation()
    }

    const [IsOpenInput, OpenInput] = useModalInput()

     
    return ( 
        <>
        <div className={`${styles.ctnLogin} ${isOpen && styles.modal_open}`} onClick={CloseModal}>
            <div className={styles.ctnLogin_2} id={"idLogin"} onClick={CancelClickDivParent}>
                <section className={styles.ctnInitialLogin}>
                    <div className={styles.ctnLogo}>
                        <Image
                        className={styles.ImageLognIn}
                        src="/img/icons/logoWiex.png"
                        alt=""
                        width={80}
                        height={60}
                        />
                        <br />
                        <h2>Sign in to Wiex</h2>
                    </div>
                    <div className={styles.ctnLogosInLogin} >
                        <div className={styles.ctnLogosInLogin_GPS} onClick={OpenInput}>
                            <IconsLoginGPS className={styles.IconsLoginInt}/>
                        </div>
                        <div className={styles.ctnLogosInLogin_Alarm} onClick={OpenInput} >
                            <IconsLoginAlarm className={styles.IconsLoginInt}/>
                        </div>
                        <div className={styles.ctnLogosInLogin_RMA} onClick={OpenInput} >
                            <IconsLoginRMA className={styles.IconsLoginInt} />
                        </div>
                    </div>
                    <div  onClick={CloseModal}>
                        <BtnCloseX/>
                    </div>
                    <div className={styles.ctnUsernameAndPassword}>
                        <div className={styles.ctnUsername}>
                        <p>Username or email address</p>
                        <input className={`${styles.InputUsername} ${IsOpenInput || input ? styles.modalInput: ""}`}  type="text"/>
                        </div>
                        <div className={styles.ctnPassword}>
                        <div className={styles.PasswordOrForfotPassword}>
                            <p className={styles.textForgotP}>
                            Password
                            </p>
                            <a className={styles.passwordText} onClick={()=>{ 
                                CloseModal() 
                                OpenNext() 
                                }}  href="">
                            Forgot Password
                            </a>
                        </div>
                        <input type="password" className={`${styles.InputUsername} ${IsOpenInput || input ? styles.modalInput: ""}`} />
                        </div>
                        <BtnIntLogin text={"Login"}/>
                
                    </div>
                    <div className={styles.NewInWiex}>
                        <p>
                        New to Wiex ?{" "}
                        <span>
                            {" "}
                            <a href="" className={styles.CreateAccount} onClick={()=> { 
                                OpenCreate()
                                CloseModal()
                            }}>
                            Create an account
                            </a>{" "}
                        </span>
                        </p>
                    </div>
                    <div className={styles.Terms}>
                        <ul className={styles.UlCreateAccount}>
                        <li>
                            <a className={styles.termLabels} href="" >
                            Terms
                            </a>
                        </li>
                        <li>
                            <a className={styles.termLabels} href="">
                            Privacy
                            </a>
                        </li>
                        <li>
                            <a className={styles.termLabels} href="">
                            Security
                            </a>{" "}
                        </li>
                        <li>
                            <a href="" className={styles.termLabels_2}>
                            Contact Wiex
                            </a>{" "}
                        </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
         </>
    )
}

export default Login
