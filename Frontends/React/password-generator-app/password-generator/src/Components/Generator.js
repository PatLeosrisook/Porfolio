 import { faCopy } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import Slider, { SliderThumb, SliderValueLabelProps } from '@mui/material/Slider';
export default function Generator() {
    const [condition, setCondition] = useState({
        includeUpper: false,
        includeLower: true,
        includeNumber: false,
        includeSymbol:false
    })
    const [length, setLength] = useState(0)
    const [randomPassword, setRandomPassword] = useState("dfjadklsfj")
    let randomizer = () => {
        console.log("Randomizing....", length)
        let password = ""
        //ascii code for characters? 
        let arrayOfSelection = [[97,122] , [65, 90], [[33,47],[58,64],[94,95], [124,126]]]
        for(let i = 0 ; i < 1; i ++) {
            // let randomSelection = Math.floor(Math.random() * arrayOfSelection.length - 1)
            let randomSelection = 2
            let randomChar = null
            if(typeof arrayOfSelection[randomSelection][0] !== Number ){
                //then this have a sub array.
                //BUG:: There are chance you'll get negative.
                randomSelection = Math.floor(Math.random() * ((Math.max(arrayOfSelection[2].length - 1, 0) - 0) + 0)) //selecting random sub array
                randomChar = Math.floor(Math.random() * (arrayOfSelection[randomSelection][1] - arrayOfSelection[randomSelection][0])  + arrayOfSelection[randomSelection][0]) // selecting random ascii number between 2 nums in the sub
                console.log("array[randomSe]:",arrayOfSelection[randomSelection], "\n", "random selection:", randomSelection,'\n', "arrayOfselection",  arrayOfSelection, '\n', "string ascii", String.fromCharCode(randomChar),'\n', 'random char:', randomChar)
            } else {

                randomChar = Math.floor(Math.random() * (randomSelection[1] - randomSelection[0]) + randomSelection[0] )
            }
            
        }
        
    }
    let handleChange = (e) => {
        let condition = e.target.name
        let currentObject = {...condition}
        if(e.target.checked) {

            if(condition == 'uppercase') {
                console.log("upper")
                currentObject.incudeUpper = true
                setCondition(currentObject)
            } else if(condition == 'lowercase') {
                console.log("lower")
                currentObject.incudeLower = true
                setCondition(currentObject)
                
            } else if(condition == 'number') {
                console.log("number")
                currentObject.incudeNumber = true
                setCondition(currentObject)
                
            } else if(condition == 'passwordLength') {
                
            }
            else {
                
                console.log("symbol")
                currentObject.incudeSymbol = true
                setCondition(currentObject)
            }
        }
    }
    let handleSlider = (e) => {
        
        setLength(e.target.value)
    }
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
                            <input onChange={e => handleChange(e)} name="lowercase" checked type="checkbox"/>
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