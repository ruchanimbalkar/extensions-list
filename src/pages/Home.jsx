//import Card component to render card
import Card from '../components/Card.jsx';
//import Button component (to render buttons Active, InActive and Show All)
import Button from '../components/Button.jsx';
//import data from data.js
import data from '../data.js';
//import styles from Home.css
import  '../components/Home.css';
import { useState} from 'react';
export default function Home(){
      //create a variable info to save the original data array
  const[info, setInfo] = useState(data);
  //create a variable inActiveCards to keep track of active cards
  const[activeCards, setActiveCards] = useState(()=> info.filter((item)=> item.isActive===true));
  //create a variable inActiveCards to keep track of in-active cards
  const[inActiveCards, setInActiveCards] = useState(()=> info.filter((item)=> item.isActive===false));
  //create a variable latestCards to keep track of the latest cards
  const [latestCards, setLatestCards] = useState(data)


  //This function sets the active cards and inActive cards
  function statusOfCards(){
    const cards = info.filter((item)=> item.isActive===true);
    setActiveCards(cards);
    const cardsInActive = info.filter((item)=> item.isActive===false);
    setInActiveCards(cardsInActive);
  }
  //Call function statusOfCards to set active and inActive cards at the beginning of program


   //This function updates the card's status based on the toggle/switch
    function updateCards(cardId){  
        const cards = info.map((item)=> {
            if(item.id === cardId){
                item.isActive = (!item.isActive);
                    return {
                        ...item,
                        isActive : item.isActive
                    };
            }
            return item;            
         });
        //set info array to cards
        setInfo(cards);
        //set latest cards to cards
        setLatestCards(cards);
        //set active and in active cards
        statusOfCards();
    }

    function active(){
        //set info to active cards
        setInfo(activeCards);
    }
    function inActive(){
        //set info to inActive cards
        setInfo(inActiveCards);      
    }

    function showAll(){
        //combine active cards and inactive cards
        const cards =activeCards.concat(inActiveCards);
        setInfo(cards);
        setLatestCards(cards);
    }

    //This function runs when user clicks remove button
    function removeCard(cardId){
        //Filter cards (filter out the cards with the ids that were on the card whose remove button was clicked)
        //Filter out from info array
        const cards = latestCards.filter((item)=> item.id !== cardId);
        //print cards on console
        console.log("cards", cards);
        //set info array to the value of cards
        setInfo(cards);
        //set latestCards array to the value of cards
        setLatestCards(cards);
        //Call function to set Active and In Active Cards
        statusOfCards();
     }

    return(<>

        <div className="wrapper">
                <header>
                <h1> Extensions List</h1>
                <div>
                    <Button  onClick={active} text="Active"/>
                    <Button  onClick={inActive} text="Inactive"/>
                    <Button  onClick={showAll} text="Show All"/>
                </div>
            </header>
            <div className="container">
            {info.map((item, index)=>
                (
                    <Card 
                     logo={item.logo}
                     levelTwoHeading={item.name} 
                     pElement={item.description}
                     isActive= {item.isActive} 
                     id={item.id}
                     onClick={removeCard}
                     cardsChange={updateCards}
                     key={index}/>
                ))}
            </div>
            
        </div>
 
    </>);
}