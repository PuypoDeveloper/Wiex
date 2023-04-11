import data from './dataCarouselAstronics.json'
import Carouse from '../ViewProducts/Carousel'

const products = Object.keys(data)

const functionCarousel = {}
export const Prueba_2=[]

products.map((key) => { 
    const functionName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    Prueba_2.push(`get${key.charAt(0).toUpperCase()}${key.slice(1)}`)
    functionCarousel[functionName] = ()=> { 
        return (
        <Carouse
            title={data[key].id}
            image={data[key].img}
            id2 ={data[key].id.replace(/\s+/g, '_')}
        />
        )
    }
})

export default functionCarousel





