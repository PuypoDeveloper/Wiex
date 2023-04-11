import styles from '../styles/App.module.css'
import Head from 'next/head'
import { Kanit } from '@next/font/google'
import { Barlow } from '@next/font/google'
import Header from './Components/Header'
import Home from './Components/Home'

const inter = Kanit ({ 
    subsets: ["latin"], 
    weight: ["100","200","300","400","500","600","700","800","900"]
})


const App = ()=> { 
    return ( 
        <div className={inter.className}>
            <Head>
                <title>Wiex</title>
            </Head>
            <Header/>
            <Home/>

        </div>
    )
}

export default App