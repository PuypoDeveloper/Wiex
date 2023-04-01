import Image from 'next/image'
import styles from '../../../styles/Login/newPassWord.module.css'
import { BtnArrowBack, BtnCloseX, BtnIntLogin } from '../Elements/Buttons';


export const NewPassword = ({isOpen, CloseModal, OpenBack })=> { 

    const CancelClickDivParent = (e)=> { 
        e.stopPropagation()
   }

    return ( 
        <main className={`${styles.CtnNewPassword} ${isOpen && styles.newPassword_open}`} onClick={CloseModal}>
        <div className={styles.ctnbodyForgot} id="ctnbodyForgot" onClick={CancelClickDivParent}>
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
                <h5>New password</h5>
                <input type="password" placeholder='Enter your new password' />
            </section>
            <section className={styles.gmailAddress}>
                <h5> repeat your New password</h5>
                <input type="password" placeholder='Enter your new password' />
            </section>
            
            <section className={styles.btnSendData}>
                <BtnIntLogin text={"Confirm"} />
            </section>
        </div>
    </main>
    )
}


