import styles from '../styles/App.module.css'
import Head from 'next/head'
import { Public_Sans } from '@next/font/google'
import Header from './Components/Header'
import ViewProductsAstronics from '../ViewProducts/ViewProducts'
import {Prueba} from '../CopperMountain/ProductsCopperMountain'
import FunctionMap from '../CopperMountain/ProductsCopperMountain'
import {Prueba_2} from '../CopperMountain/CarouselCopper'
import FunctionCarousel from '../CopperMountain/CarouselCopper'



const inter = Public_Sans ({ 
    subsets: ["latin"], 
    weight: ["100","200","300","400","500","600","700","800","900"]
})


const Astronics = ()=> { 
    return ( 
        <div className={inter.className}>
            <Head className={styles.header}>
                <title>Wiex/CopperMountain</title>
            </Head>
            <Header/>
            <ViewProductsAstronics className={styles.Astronics} Order={Prueba} Product={FunctionMap} Order_2={Prueba_2} Product_2={FunctionCarousel}/>

        </div>
    )
}

export default Astronics; 