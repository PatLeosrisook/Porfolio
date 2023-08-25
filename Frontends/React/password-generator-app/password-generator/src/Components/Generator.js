 import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
export default function Generator() {
    const [condition, setCondition] = useState({
        includeUpper:  { 
            is: false,
            range: [65,90]
        },
        includeLower:  { 
            is: false,
            range: [97,122]
        },
        includeNumber: { 
            is: false,
            range: [48,57]
        },
        includeSymbol: { 
            is: false,
            range: [[33,47],[58,64],[94,95], [124,126]]
        }
    })
    const [length, setLength] = useState(0)
    const [randomPassword, setRandomPassword] = useState("dfjadklsfj")
    const[arrayOfSelection, setArrayOfSelection] = useState([])
    let removeItem = (itemToRemove, items) => {
        console.log("reemoving", arrayOfSelection)
        let indexOfRemoval = arrayOfSelection.filter((item, index) => {
            console.log("removing items from", arrayOfSelection, 'and item to remove is ', itemToRemove)
            if(JSON.stringify(item) == JSON.stringify(itemToRemove)){
                console.log(item, itemToRemove)
                return index
            }
        })
        arrayOfSelection.splice(indexOfRemoval, 1)
        
        console.log('removed?', indexOfRemoval, itemToRemove, arrayOfSelection)
    }
    let randomizer = () => {
        console.log("Randomizing....", length, 'currentOb', condition, arrayOfSelection)
        let password = ""
        //ascii code for characters? 
        // let arrayOfSelection = [[97,122]]
        
        for(let i = 0 ; i < length; i ++) {
            let randomSelection = Math.max(Math.floor(Math.random() * arrayOfSelection.length ), 0)
            
            // console.log("Selectin:", randomSelection )
            let randomChar = null
            if(typeof arrayOfSelection[randomSelection][0] !== 'number'){
                
                //then this have a sub array.
                console.log("symbol array encountered")
                let randomSub = Math.floor(Math.random() * arrayOfSelection[randomSelection].length ) //selecting random sub array
                randomChar = Math.floor(Math.random() * (arrayOfSelection[randomSelection][randomSub][1] - arrayOfSelection[randomSelection][randomSub][0])  + arrayOfSelection[randomSelection][randomSub][0]) // selecting random ascii number between 2 nums in the sub
                console.log(arrayOfSelection[randomSelection][randomSub], randomSub, "random char", randomChar, ":", String.fromCharCode(randomChar))
                password += String.fromCharCode(randomChar)
            } else {

                randomChar = Math.floor(Math.random() * (arrayOfSelection[randomSelection][1] - arrayOfSelection[randomSelection][0]) + arrayOfSelection[randomSelection][0] )
                password += String.fromCharCode(randomChar)
            }
            
        }
        setRandomPassword(password)
    }
    let handleChange = (e) => {
        let conditionName = e.target.name;
        let currentObject = { ...condition }; // Make sure to create a copy of the state object
        
        if (e.target.checked) {
            if (conditionName === 'uppercase') {
                currentObject.includeUpper.is = true;
            } else if (conditionName === 'lowercase') {
                currentObject.includeLower.is = true;
            } else if (conditionName === 'number') {
                currentObject.includeNumber.is = true;
            } else if(conditionName == 'symbol') {
                currentObject.includeSymbol.is = true;
            }
        } else {
            // Handle the case when the checkbox is unchecked and update the corresponding property to false
            if (conditionName === 'uppercase') {
                currentObject.includeUpper.is = false;
                removeItem(currentObject.includeUpper.range)
            } else if (conditionName === 'lowercase') {
                currentObject.includeLower.is = false;
                removeItem(currentObject.includeLower.range)
            } else if (conditionName === 'number') {
                currentObject.includeNumber.is = false;
                removeItem(currentObject.includeNumber.range)
            } else if(conditionName == 'symbol') {
                currentObject.includeSymbol.is = false;
                removeItem(currentObject.includeSymbol.range)
            }
        }
    
        setCondition(currentObject);
    }
    let handleSlider = (e) => {
        
        setLength(e.target.value)
    }
    let setConditionRange = (range) => {
        setArrayOfSelection(prev => [
            ...prev, 
            range
        ])
    }
    useEffect(()=> {
        let subArray = null
        if(condition.includeLower.is ) {
            subArray = [97,122]
            let exists = arrayOfSelection.some(arr => JSON.stringify(arr) === JSON.stringify(subArray))
            if(exists == false) {
                setConditionRange(subArray)
            }
        }
        if(condition.includeUpper.is) {
            subArray = [65,90]
            let exists = arrayOfSelection.some(arr => JSON.stringify(arr) === JSON.stringify(subArray))
            if(exists == false) {
                setConditionRange(subArray)
            }
            
        } else {
        } 
        if(condition.includeNumber.is) {
            // arrayOfSelection.push([48,57])
            subArray = [48,57]
            let exists = arrayOfSelection.some(arr => JSON.stringify(arr) === JSON.stringify(subArray))
            if(exists == false) {
                setConditionRange(subArray) 
            }
            
        } else {
        } 
        if(condition.includeSymbol.is) {
            console.log("have symbol")
            subArray = [[33,47],[58,64],[94,95], [124,126]]
            let exists = arrayOfSelection.some(arr => JSON.stringify(arr) === JSON.stringify(subArray))
            if(exists == false) {
                setConditionRange(subArray)
            }

        } 
    },[condition])
    return(
        <section id="Generator">
            <h1>Password generator</h1>
            <section id="Gen_panel">
                <section className="password">
                    <p>{randomPassword}</p>
                    <FontAwesomeIcon icon={faCopy} />
                </section>
                <section className="indicators">
                    <section className="pass_length">
                        <div className="length_header">
                            <p>Password length</p>
                            <p id="length">{length}</p>
                        </div>
                        <Slider
                        defaultValue={30}
                        onChange={e => handleSlider(e)}
                        value={length}
                        sx={{
                            width: "90%",
                            color: 'white',
                        }} />
                    </section>
                    <ul className="conditions">
                        <li className="condition">
                            <input onChange={e => handleChange(e)} name="uppercase" type="checkbox"/>
                            <p>Include Uppercase Letters</p>
                        </li>
                        <li className="condition">
                            <input onChange={e => handleChange(e)} name="lowercase"  type="checkbox"/>
                            <p>Include Lowercase Letter</p>
                        </li>
                        <li className="condition">
                            <input onChange={e => handleChange(e)} name="number" type="checkbox"/>
                            <p>Include Numbers</p>
                        </li>
                        <li className="condition">
                            <input onChange={e => handleChange(e)} name="symbol" type="checkbox"/>
                            <p>Include Symbols</p>
                        </li>
                    </ul>
                    <section className="Strength">
                        <h3>Strength</h3>
                        <div className="Strength_bar">
                            <p>..</p>
                            <div className="Bars">
                                <div className="Bar"></div>
                                <div className="Bar"></div>
                                <div className="Bar"></div>
                                <div className="Bar"></div>
                            </div>
                        </div>
                    </section>
                    <button onMouseUp={randomizer} id="Generate_btn">Generate <span>icon</span></button>
                </section>
            </section>
        </section>
    )
}