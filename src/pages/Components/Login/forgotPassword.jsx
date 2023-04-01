import Image from 'next/image'
import styles from '../../../styles/Login/forgotPassword.module.css'
import { BtnArrowBack, BtnCloseX, BtnIntLogin } from '../Elements/Buttons';


/** FORMULARIO FORGOT PASSWORD */



export const ForgotPassword =  ({isOpen,CloseModal, OpenBack, OpenNext})=> { 
   const CancelClickPartner = (e)=> { 
        e.stopPropagation()
   }
    return ( 
        <>
        <main className={`${styles.ctnForgot} ${isOpen && styles.forgot_open}`} onClick={CloseModal}>
            <div className={styles.ctnSectionsForgot} onClick={CancelClickPartner}>
                <section className={styles.titleForgot}>
                        <Image className={styles.ImageLognIn} src="/img/icons/logoWiex.png" alt="" width={80} height={60} />
                        <br />
                        <div className={styles.ctnArowBack} onClick ={()=>{ 
                            CloseModal()
                            OpenBack()
                        }} >
                            <BtnArrowBack/>
                        </div>
                        <div className={styles.ctnClose} onClick={CloseModal} >
                            <BtnCloseX/>
                        </div>
                </section>
                <section className={styles.gmailAddress}>
                    <h5>Enter your mail address</h5>
                    <input type="text" placeholder='Mail' />
                    <div className={styles.validEmailAddress} >
                        <p>Email address invalid</p>
                    </div>
                </section>
                <section className={styles.btnSendData} onClick={()=> { 
                        OpenNext()
                        CloseModal()
                    }}>
                    <BtnIntLogin text={"Send"}/>
                </section>
            </div>
        </main>
    </>
    )
}