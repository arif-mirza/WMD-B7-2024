import  { cardData } from "../../assets/CardData.js"; 
import Card from "./Card.jsx";
const  CardSection = () => {
  return (
   <>
   <div>
    <div className="mt-16 grid grid-cols-4 gap-2 pt-8 mb-5">
    {cardData.map((card) => {
          return (
            <div key={card.id}>
              <Card
                id={card.id}
                name={card.name}
                img={card.image}
                status={card.status}
              ></Card>
            </div>
          );
        })}

    </div>
   </div>
   
   
   
   </>
  )
}

export default CardSection