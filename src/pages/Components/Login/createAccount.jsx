import Image from 'next/image'
import styles from '../../../styles/Login/createAccount.module.css'
import { BtnArrowBack, BtnCloseX, BtnIntLogin } from '../../../Elements/Buttons';

const CreateAccount = ({isOpen, CloseModal, OpenBack }) => { 

    const CancelClickDivParent = (e)=> { 
        e.stopPropagation()
   }

    return ( 
        <main className={`${styles.mainCreate} ${isOpen && styles.create_open}`} onClick={CloseModal}>
            <div className={styles.ctnCrateAcount}  onClick={CancelClickDivParent}>
                <section className={styles.ctnLogoCreate}>
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
                    <h5>Enter your email address</h5>
                    <input type="text"/>
                    <div className={styles.validEmailAddress}>
                        <p>Email address invalid</p>
                    </div>
                </section>
                <section className={styles.gmailAddress}>
                    <h5>Enter your password</h5>
                    <input type="password" />
                </section>
                <section className={styles.gmailAddress}>
                    <h5>Repeat your password</h5>
                    <input type="password"/>
                </section>
                <section className={styles.btnSendData}>
                <BtnIntLogin text={"Check in"}/>
                </section>
            </div>
        </main>
    )
}

export default CreateAccount