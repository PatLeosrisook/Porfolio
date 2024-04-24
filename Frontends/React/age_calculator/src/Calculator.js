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
    })
    let calculate = () => {
        if(validity()) {

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
                offsetDay = Math.abs(currentDate.getDate() - day)
                console.log("current more day:" , offsetDay, currentDate.getDate(), day)
            }
            setOffset({
                offsetYear,
                offsetMonth,
                offsetDay
            })
        }
    }
    let validity = () => {
        let dateErrorText = document.querySelector(".date_error")
        let monthErrorText = document.querySelector(".month_error")
        let yearErrorText = document.querySelector(".year_error")
        let dateInput = document.querySelector("#day")
        let monthInput = document.querySelector("#month")
        let yearInput = document.querySelector("#year")
        let thisYear = new Date().getFullYear()
        let isValid = false;

        const {day, month, year} = date
        if(day < 1) {
            console.log("wrong!")
        }
        if(year % 4 == 0 ) {
            //Leap years, 29 days
            if(month == 2) {
                // feb should have 29 days here 
                if(day == "" || (day < 1 || day > 29)) {
                    dateErrorText.classList.add("visible")
                    dateErrorText.textContent = "It's leap year! Only 29 days!"
                    dateInput.classList.add("error_line")
                    return false
                } else {
                    dateErrorText.classList.remove("visible")
                    dateInput.classList.remove("error_line")
                    isValid = true
                }
            }
        } else {
            if(month == 2) {
                // not leap year so 28 days
                if(day === "" || (day > 28 || day < 1)) {
                    dateErrorText.textContent = "It's not leap year!"
                    dateErrorText.classList.add("visible")
                    dateInput.classList.add("error_line") 
                    return false 
                } else {
                    dateErrorText.textContent = "Invalid date"
                    dateErrorText.classList.remove("visible")
                    dateInput.classList.remove("error_line")
                    isValid = true
                }
            } else {
                let subtractADay = 0
                if(month == 4 || month == 6 || month == 9 || month == 11) {
                    subtractADay = 1
                    dateErrorText.textContent = "There's only 30 days"
                } else {
                    subtractADay = 0
                    dateErrorText.textContent = "Must be a valid date"
                }
                if(day === "" || (day > (31 - subtractADay) || day < 1)) {
                    dateErrorText.classList.add("visible")
                    dateInput.classList.add("error_line")
    
                    return false 
                    
                } else {
                    dateErrorText.classList.remove("visible")
                    dateInput.classList.remove("error_line")
                    isValid = true
                }
            }
            
        }
        if(month === "" || (month > 12 || month < 1)) {
            monthErrorText.classList.add("visible")
            monthInput.classList.add("error_line")
            isValid = false;
            // return false 
        } else {
            monthErrorText.classList.remove("visible")
            monthInput.classList.remove("error_line")
            isValid = true
        }
        if(year === "" || (year > thisYear)) {
            yearInput.classList.add("error_line")
            yearErrorText.classList.add("visible")
            return false 
        } else if(year < 1900) {
            yearErrorText.textContent = "year must be more than or equal to 1900"
            yearErrorText.classList.add("visible")
            return false 
        }else {
            yearInput.classList.remove("error_line")
            yearErrorText.classList.remove("visible")
            isValid = true
        }

        return isValid
    }
    return(
        <section id="Cal">
            <div className="Wrapper">
                <section id="Inputs">
                    <div className="form_group">
                        <label for="">Day</label>
                        <input onChange={e => handleChange(e, "day")} value={date.day} name="day" type='number' id="day"/>
                        <p className="error date_error">Must be a valid day.</p>
                    </div>
                    <div className="form_group">
                        <label for="">Month</label>
                        <input onChange={e => handleChange(e, "month")} value={date.month} type='number' name="month" id="month"/>
                        <p className="error month_error">Must be a valid month.</p>
                    </div>
                    <div className="form_group">
                        <label for="">Year</label>
                        <input onChange={e => handleChange(e, "year")} value={date.year} name="year" type='number' id="year"/>
                        <p className="error year_error">Must be in the past. </p>
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
                    <p className="display year"><span className="highlight">{(offsetDate.offsetYear === '') ? "--" : offsetDate.offsetYear}</span> years</p>
                    <p className="display month"><span className="highlight">{(offsetDate.offsetMonth === '') ? "--" : offsetDate.offsetMonth}</span> months</p>
                    <p className="display day"><span className="highlight">{(offsetDate.offsetDay === '') ? "--" : offsetDate.offsetDay}</span> days</p>
                </section>
            </div>
        </section>
    )
}