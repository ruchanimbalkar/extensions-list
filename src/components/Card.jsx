import Button from "./Button.jsx";
import Toggle from "./Toggle.jsx";
import "./Card.css";
import {useState} from "react";
export default function Card({imgSrc,levelTwoHeading, pElement, isActive}){

    const [someClass, setSomeClass] = useState('');
    function removeCard(){
       setSomeClass("display-none");
    }
     
    //Images are not showing
    // console.log(imgSrc);

    return (<div className= {someClass === '' ? "card" : `card ${someClass}`}>
        <div className="child1">
            <img src= {imgSrc} alt={levelTwoHeading}/>
            <div className="child11">
                <h2> {levelTwoHeading} </h2>
                <p> {pElement} </p>
            </div>    
        </div>
        <div className="child2">
            <Button onClick={removeCard} className="button" text="Remove"/>
            <Toggle className="toggle" isActive={isActive}/>
        </div>
    </div>);
}