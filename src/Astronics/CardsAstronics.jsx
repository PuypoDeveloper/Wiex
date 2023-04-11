import Cards from "../pages/Components/Cards/cardsCarousel";
import data from './CardsAstronics.json';

const valores = Object.keys(data);
const functionCard = {};

valores.map((key)=> { 
  const functionName = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
  functionCard[functionName] = () => { 
    return ( 
      <Cards 
        image={data[key].image}
        title={data[key].title}
        text={data[key].text}
        image_2={data[key].image_2}
      />
    );
  };
});

export { functionCard as default };

