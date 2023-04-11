import BaseProducts from '../ViewProducts/BaseProducts'
import data from './dataProductsCopperMountain.json'

const FunctionMap = [1]; 
export const Prueba = []

const valores = Object.keys(data)

valores.map((key) => { 
    const functionName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
    Prueba.push(`get${key.charAt(0).toUpperCase()}${key.slice(1)}`)
    FunctionMap[functionName] = ()=> { 
        return ( 
            <BaseProducts
                title_1={data[key].id}
                text_1={data[key].text_1}
                image_1={data[key].image_1}
                text_2={data[key].text_2}
                image_2={data[key].image_2}
                text_3={data[key].text_3}
                title_2={data[key].title_2}
                text_4={data[key].text_4}
                image_3={data[key].image_3}
                image_4={data[key].image_4}
                text_5={data[key].text_5}
                num1={data[key].num1}
                num2={data[key].num2}
                num3={data[key].num3}
                num4={data[key].num4}
            />
        )
    }
})

export default FunctionMap

