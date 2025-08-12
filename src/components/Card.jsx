import Button from "./Button.jsx";
import Toggle from "./Toggle.jsx";
import "./Card.css";
// import {useState} from "react";
export default function Card({logo,levelTwoHeading, pElement, isActive,id,onClick}){

    // const [someClass, setSomeClass] = useState('');

    return (<div className="card">
        <div className="child1">
            <img src= {logo} alt={levelTwoHeading}/>
            <div className="child11">
                <h2> {levelTwoHeading} </h2>
                <p> {pElement} </p>
            </div>    
        </div>
        <div className="child2">
            <Button onClick={()=>onClick(id)} className="button" text="Remove"/>
            <Toggle className="toggle" isActive={isActive}/>
        </div>
    </div>);
}