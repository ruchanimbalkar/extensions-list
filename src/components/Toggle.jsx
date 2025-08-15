// Import the default export named "Switch" from the "react-switch" package.
// This component displays a toggle-style switch with customizable colors.
import Switch from 'react-switch';
// import  {useState} from 'react';
export default function Toggle({isActive , updateActiveStatus, id}){
    console.log(id, isActive);
    // const [isChecked, setIsChecked] = useState(isActive);
    // function handleChange(checked){
    //     console.log("Why is this being called if there is no change ??? ");
    //     //This function toggles from true to false when the user 
    //     setIsChecked(checked);
    //     //This function updates the value of the isActive key for this id in the data
    //     updateActiveStatus(id);
    // }
    return (<Switch onChange={() => updateActiveStatus(id)} checked={isActive}  onColor="#EE5F54" uncheckedIcon={false}  checkedIcon={false}/>);
}