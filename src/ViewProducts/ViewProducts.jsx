import styles from '../styles/Astronics/Astronics.module.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

const ViewProductsAstronics = ({Order, Product, Order_2, Product_2})=> { 

    /**FUNCIONES PARTE DESCRIPCION PRODUCTO */

    const [num, setNum] = useState(0)

    let Contador = Product[Order[num]]

    const Next = ()=> { 
        if (num < (Order.length-1)) { 
            setNum(num+1)
        }else if (num>= (Order.length-1)) { 
            setNum(0)
        }
        
    }

    const Back = ()=> { 
        if (num === 0) { 
            setNum(Order.length -1)
        }
        if (num > 0) { 
            setNum(num-1)
        }
    }

    const focus = (id)=> { 
        for (let i = 0; i<= Order.length; i++) { 
            if (id === Order[i]) { 
                setNum(i)
            }
        }
    }


    /**FUNCIONES CAROUSEL  */

    let Element1 = Product_2[Order_2[0]]
    let Element2 = Product_2[Order_2[1]]
    let Element3 = Product_2[Order_2[2]]
    let Element4 = Product_2[Order_2[3]]

    return ( 
        <div className={styles.ctnDisplayAll}>
            <div className={styles.ctnAllElements}>
                <div className={styles.viewOneProducts}>
                    <div className={`${styles.arrowLeft} ${styles.arrowBox}`} id="btnLeft_2" onClick={Back} >
                        <KeyboardArrowLeftIcon />
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productr8200} id="productr8200">
                            <Contador/>
                        </div>
                    </div>
                    <div className={styles.RigthCtn}>
                        <div className={`${styles.arrowRight} ${styles.arrowBox}`} onClick={Next}>
                            <KeyboardArrowRightIcon />
                        </div>
                    </div>

                </div>
                <div className={styles.viewAllProducts}>
                    <div className="productOne" onClick={()=>{focus(Order[0])}}>
                        <Element1 id="getR8200"/>
                    </div>
                    <div className="productOne" onClick={()=>{focus(Order[1])}} >
                        <Element2 id="getR8000C"/>
                    </div>
                    <div className="productOne" onClick={()=>{focus(Order[2])}}>
                        <Element3 id="getR8100"/>
                    </div>
                    <div className="productoNE" onClick={()=>{focus(Order[3])}}>
                        <Element4 id="getR8600" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProductsAstronics
