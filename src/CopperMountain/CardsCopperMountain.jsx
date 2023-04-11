
import Cards from "../pages/Components/Cards/cardsCarousel"
import data from './CardsCopperMountain.json'


const valores = Object.keys(data)
const FunctionCard_2 = {}

valores.map((key)=> { 
    const functionName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    FunctionCard_2[functionName] = () => { 
        return ( 
            <Cards 
            image={data[key].image}
            title={data[key].title}
            text={data[key].text}
            image_2={data[key].image_2}
            />
        )
    }
})

export default FunctionCard_2
    
