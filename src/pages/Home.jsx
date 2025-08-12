import Card from '../components/Card.jsx';
import Button from '../components/Button.jsx';
import data from '../data.js';
import  '../components/Home.css';
import {useState} from 'react';
export default function Home(){
    const[info, setInfo] = useState(data);

    function active(){
        const activeCards = data.filter((item)=> item.isActive===true);
        setInfo(activeCards);
    }
    function inActive(){
        const inActiveCards = data.filter((item)=> item.isActive===false);
        setInfo(inActiveCards);
    }

    function showAll(){
        setInfo(data);
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
            {info.map((item)=>
                (
                    <Card 
                     imgSrc={item.logo}
                    levelTwoHeading={item.name} 
                    pElement={item.description}
                     isActive= {item.isActive} 
                     key={item.id}/>
                ))}
            </div>
            
        </div>
 
    </>);
}