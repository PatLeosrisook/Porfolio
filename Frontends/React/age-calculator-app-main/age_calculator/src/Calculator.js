import  Arrow from './assets/images/icon-arrow.svg'
import './CSS/style.css'
import {useEffect, useState} from 'react'
export function Calculator() {
    const [date, setDate] = useState({
        day: "",
        month: "",
        year: ""
    }) 
    const [offsetDate, setOffset] = useState({
        offsetYear : "",
        offsetMonth :  "", 
        offsetDay: ""
    })
    let handleChange = (e, prop) => {
        let value = e.target.value 
        let name = e.target.name
        setDate({
            ...date, 
            [prop]: value
        })
    }
    useEffect(() => {
        console.log("date:", date.day, date.month, date.year)
    })
    let calculate = () => {
        let {day,month, year} = date
        const currentDate = new Date();
        let currentDay = currentDate.getDate() 
        let currentMonth = currentDate.getMonth() + 1 //indexed 0
        let currentYear = currentDate.getFullYear() 
        console.log(`${currentDay}/ ${currentMonth}/${currentYear}`)
        let offsetYear = currentYear - year
        let offsetMonth = currentMonth - month
        let offsetDay = 0
        if(currentDate < day) {
            offsetDay = day + currentDate
            console.log("current less day:" , offsetDay)
        } else {
            offsetDay = currentDate.getDate() - day
            console.log("current more day:" , offsetDay, currentDate.getDate(), day)
        }
        console.log(`calculated : ${offsetDay}/${offsetMonth}/${offsetYear}`, offsetDay)
        setOffset({
            offsetYear,
            offsetMonth,
            offsetDay
        })
    }
    return(
        <section id="Cal">
            <div className="Wrapper">
                <section id="Inputs">
                    <div className="form_group">
                        <label for="">Day</label>
                        <input onChange={e => handleChange(e, "day")} value={date.day} name="day" type='number' id="day"/>
                        <p className="error">Must be a valid day.</p>
                    </div>
                    <div className="form_group">
                        <label for="">Month</label>
                        <input onChange={e => handleChange(e, "month")} value={date.month} type='number' name="month" id="month"/>
                        <p className="error">Must be a valid month.</p>
                    </div>
                    <div className="form_group">
                        <label for="">Year</label>
                        <input onChange={e => handleChange(e, "year")} value={date.year} name="year" type='number' id="year"/>
                        <p className="error">Must be in the past. </p>
                    </div>
                </section>
                <section id="Divider">
                    <hr/>
                    <button onClick={calculate} className="icon-wrapper">
                        <img src={Arrow} alt="Arrow icon"/>
                    </button>
                    <hr/>
                </section>
                <section id="Display">
                    <p className="display year"><span className="highlight">{(offsetDate.offsetYear == '') ? "--" : offsetDate.offsetYear}</span> years</p>
                    <p className="display month"><span className="highlight">{(offsetDate.offsetMonth == '') ? "--" : offsetDate.offsetMonth}</span> months</p>
                    <p className="display day"><span className="highlight">{(offsetDate.offsetDay == '') ? "--" : offsetDate.offsetDay}</span> days</p>
                </section>
            </div>
        </section>
    )
}