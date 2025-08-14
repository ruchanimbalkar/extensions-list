// Import the default export named "Switch" from the "react-switch" package.
// This component displays a toggle-style switch with customizable colors.
import Switch from 'react-switch';
// import  {useState} from 'react';
export default function Toggle({isActive , someChange, id}){
    // const [isChecked, setIsChecked] = useState(isActive);
    // function handleChange(updatedCheckedValue){
    //     setIsChecked(updatedCheckedValue);
    //     cardsChange(id);
    // }

    return (<Switch onChange={()=> someChange(id)} checked={isActive}  onColor="#EE5F54" uncheckedIcon={false}  checkedIcon={false}/>);
}