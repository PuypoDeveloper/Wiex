import gsap from 'gsap';
import React from 'react'
import styles from '../../../styles/Elements/IconsLogin.module.css'
import useModalInput from '../hooks/useModalInputLogin';

const selectionLogin = (pos) => {


    const elements = [
      { id: "ctnLogosInLogin_GPS", color: pos === 1 ? "rgba(194, 191, 191, 0.219)" : "#00000000" },
      { id: "ctnLogosInLogin_Alarm", color: pos === 2 ? "rgba(194, 191, 191, 0.219)" : "#00000000" },
      { id: "ctnLogosInLogin_RMA", color: pos === 3 ? "rgba(194, 191, 191, 0.219)" : "#00000000" },
    ];
  
    elements.forEach((element) => {
      gsap.to(`#${element.id}`, {
        duration: 0.4,
        backgroundColor: element.color,
        repeat: 0,
      });
    });
  };

/**ICONOS LOGIN MAPS*/

export const IconsLoginGPS = () => {
  return (
    <>
        <div className={styles.maps} id ="ctnLogosInLogin_GPS" onClick={()=>{selectionLogin(1)}}>
            <img  className={styles.iconsapp1} id="iconapp1" src="/img/icons/maps.svg" alt="" srcSet="" width={40} height={40}/>
            <p>GPS</p>
        </div>
    </>
  )
}

/**ICONOS LOGIN GPS*/

export const IconsLoginAlarm = () => {
    return (
      <>
          <div className={styles.gps} id ="ctnLogosInLogin_Alarm" onClick={()=>{selectionLogin(2)}}>
              <img  className={styles.iconsapp1} id="iconapp1"src="/img/icons/alarma.svg" alt="" srcSet="" width={40} height={40}/>
              <p>Alarm</p>
          </div>
      </>
    )
  }

  /**ICONOS LOGIN RMA*/

export const IconsLoginRMA = () => {
    return (
      <>
          <div className={styles.rma} id="ctnLogosInLogin_RMA" onClick={()=>{selectionLogin(3)}}>
              <img  className={styles.iconsapp1} id="iconapp1" src="/img/icons/rma.svg" alt="" srcSet="" width={40} height={40}/>
              <p>RMA</p>
          </div>
      </>
    )
  }
