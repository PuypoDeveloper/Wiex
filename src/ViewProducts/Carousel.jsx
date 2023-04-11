import styles from '../styles/Astronics/Astronics.module.css'
import gsap from 'gsap'

const Carouse = ({title, image, id2}) => { 

    const activeAnimation = (id)=> { 
        let tl1 = gsap.timeline({ 
            repeat:0
        })
        tl1.to(("#"+id), { 
            duration: 0.4, 
            scale: 1.1, 
            y: -20
        })
    }

    const desactiveAnimation = (id) => { 
        let tl1 = gsap.timeline({ 
            repeat:0
        })
        tl1.to(("#"+id), { 
            duration: 0.4, 
            scale: 1, 
            y: 0
        })
    }

    return (
    <div className={styles.productCarrousel} >
        <div className={styles.ctnProducInCarrousel} id={id2} onMouseMove={() => { activeAnimation(id2); }} onMouseLeave={()=>{desactiveAnimation(id2)}}>
            <h3>{title}</h3>
            <img className={styles.ImageInCarouselProduct} src={image} alt="" width={210} height={110}></img>
        </div>
    </div>
    )
}

export default Carouse





