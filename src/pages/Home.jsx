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
  const [info, setInfo] = useState(data);
  //set screen view to "all"
  const [screenView, setScreenView] = useState("all");

   // This function updates the value of the isActive key for this id in the data
    const updateCards = (cardId) => {  
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
    }

    const checkFilterData = () => {
        if(screenView ==="all"){
           //return info
           return info;
        }
        else if(screenView === "active"){
            console.log (screenView)
            return info.filter((item) => item.isActive === true);
        }
        else if(screenView === "inactive"){
            console.log (screenView)
            return info.filter((item) => item.isActive === false);
        }
    };


    //This function runs when user clicks remove button
    const removeCard = (cardId) => {
        //Filter cards (filter out the cards with the ids that were on the card whose remove button was clicked)
        //Filter out from info array
        const cards = info.filter((item)=> item.id !== cardId);
        //print cards on console
        console.log("cards", cards);
        //set info array to the value of cards
        setInfo(cards);
     }

    return(<>

        <div className="wrapper">
                <header>
                <h1> Extensions List</h1>
                <div>
                    <Button  onClick={() => (setScreenView("active"))} text="Active"/>
                    <Button  onClick={ () => (setScreenView("inactive"))} text="Inactive"/>
                    <Button  onClick={() => (setScreenView("all"))} text="Show All"/>
                </div>
            </header>
            <div className="container">
            { checkFilterData().map((item, index)=>
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
               
                ))           
            }
            </div>
            
        </div>
 
    </>);
}