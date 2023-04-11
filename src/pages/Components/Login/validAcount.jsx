import Image from 'next/image'
import styles from '../../../styles/Login/validAccount.module.css'
import { BtnArrowBack, BtnCloseX, BtnIntLogin } from '../../../Elements/Buttons';

const ValidAcount = ({isOpen, CloseModal, OpenBack, OpenNext})=> { 

    const CancelClickDivParent = (e)=> { 
        e.stopPropagation()
   }

    return( 
        <main className={`${styles.mainForgotP} ${isOpen && styles.new_open}`} onClick={CloseModal}>
            <div className={styles.ctnbodyForgot}  onClick={CancelClickDivParent}>
                <section className={styles.titleForgot}>
                    <Image className={styles.ImageLognIn} src="/img/icons/logoWiex.png" alt="" width={80} height={60} />
                        <br />
                        <div className={styles.ctnArowBack} onClick={()=> { 
                            OpenBack()
                            CloseModal()
                        }} >
                            <BtnArrowBack/>
                        </div>
                        <div className={styles.ctnClose} onClick={CloseModal} >
                            <BtnCloseX/>
                        </div>
                </section>
                <section className={styles.gmailAddress}>
                    <h5>Enter the code of 6 numbers sent to your mail</h5>
                    <input type="number" placeholder='Enter the numbers' />
                </section>
                <section className={styles.btnSendData} onClick={()=> { 
                        OpenNext()
                        CloseModal()
                    }}>
                    <BtnIntLogin text={"Send"} />
                </section>
                <section className={styles.dontreceive}> 
                    <a href="" onClick={()=> { 
                            OpenBack()
                            CloseModal()
                        }} >¿didn´t receive your code ?</a>
                </section>
            </div>
        </main>
    )
}


export default ValidAcount