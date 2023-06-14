
var slideon = new Slideon()
slideon.load()
let button = document.querySelector('#nav_btn')
let form = document.querySelector("form")
let currentScreen = null
let currentX = 0;
let backbtn = document.querySelector("#form_nav p")
let toggleButton = document.querySelector('.slideon')
let plans = document.querySelectorAll(".input_container .checkbox")
let profile_inputs = document.querySelectorAll('.personal input')
let addons_checkboxes = document.querySelectorAll('.addons_checkbox input')

let bill_cycle = document.querySelector("#bill_cycle")
let plan_price = document.querySelector("#overview_price")
let addons_container = document.querySelector(".addons_overview")
var currentSelectedPlan = null
let data = {
    profile : {
        name: "",
        email: "",
        phone:""
    },
    plan: {
        type: "Arcade",
        price:"$9/mo",
        cycle:"monthly",
    }, 
    addons: []
}
window.onload = function() {
    if(window.innerWidth > 900) {
        currentScreen = "desktop"
    } else{
        currentScreen = 'mobile'
    }
    console.log(currentScreen)
}
profile_inputs.forEach(profile => {
    profile.addEventListener("change", function(e){
        data.profile[e.target.name] = e.target.value
        console.log(data)
    })
})
button.addEventListener("click", function(){
    // form validation 
    console.log('current scrren', currentX)
    let valid = false 
    let screenLimit = 0
    if(currentScreen !== 0) {
        backbtn.classList.add("show_btn")
    }
    if(currentScreen == "desktop") {
        if(currentX == 0 ) { 
            // Validate first  
            let inputs = document.querySelectorAll(".personal_form input")
            Array.from(inputs).forEach(input => {
                console.log(input.value.length, input)
                if(input.value.length == 0) {
                    console.log(input, 'is empty')
                    //TODO:: add in error
                    input.classList.add('error')
                    valid =  false;  
                } else {
                    input.classList.remove('error')
                    valid = true
                }
            })
            if(valid) {
                moveTo((490 + 321), currentX > -3000)
            }
    
        } else if(currentX == "-811") {
            valid = false // reset to false at new section
           plans.forEach(plan => {
                if(plan.classList.contains("checked_plan")) {
                    valid = true
                }
           })
           if(valid) {
            moveTo((490+321), currentX > -3000)
           }
        } else if(currentX == -1622) {
            let sumPrice = 0;
            data.addons.forEach( add => {
                sumPrice += Number(add.price.match(/[0-9]/g).join(""))
            })
            sumPrice += Number(data.plan.price.match(/[0-9]/g).join(""))
            console.log(sumPrice)
            let totalCycle = document.querySelector("#total_cycle")
            let totalPrice = document.querySelector("#total")
            totalCycle.textContent = data.plan.cycle
            totalPrice.textContent = `$${sumPrice}/mo`
            bill_cycle.textContent = data.plan.cycle
            plan_price.textContent = data.plan.price
            //Remove any existing child in case where there are changes
            addons_container.childNodes.forEach(child => {
                child.remove()         
            })
            data.addons.forEach(add => {
                let item = createAddon(add.service, add.price)
                addons_container.append(item)
            })
    
            moveTo((490 +321), currentX > -3000)
        }
        screenLimit = -3000
        
    } else {

    }
    console.log(data)
})
backbtn.addEventListener("click",function() {
    if(currentScreen == "desktop") {
        if(currentX < 0) {
            currentX += (490 + 321)
            form.style.transform = `translateX(${currentX}px)`
        }
    }
})
addons_checkboxes.forEach(add =>{
    if(add.checked) {
        console.log('helow')
    }
    add.addEventListener('click', function(e) {
        if(e.target.checked) {
            e.target.parentElement.parentElement.classList.add("checked_plan")
            let serviceName = e.target.name.replace(" ","_")
            data.addons.push({service: e.target.name, price: document.querySelector(`.${serviceName}`).textContent})
            // addons_container.append(createAddon(e.target.name, document.querySelector(`.${serviceName}`).textContent))
    
        } else {
            e.target.parentElement.parentElement.classList.remove("checked_plan")
            //find the unchecked item and remove it from the array.
            data.addons.forEach((add,index) => {
                if(add.service == e.target.name) {
                    data.addons.splice(index,1)
                    console.log(data.addons)
                }
            })
           
        }
    })
})
plans.forEach((plan, index) => {
    
    if(plan.classList[plan.classList.length - 1] == 'checked_plan') {
        currentSelectedPlan = plan.classList[plan.classList.length - 2]
        console.log(plan.classList, currentSelectedPlan)
    } else  {
        console.log(plan)
    }
    plan.addEventListener('click',function() {
        let currentlySelected =  document.querySelector(`.${currentSelectedPlan}`)
        if(currentlySelected !== null) {
            currentlySelected.classList.remove('checked_plan')
        }
        this.classList.add('checked_plan')
        currentSelectedPlan = this.classList[this.classList.length - 2]
        
        data.plan["type"] = document.querySelector(`.${currentSelectedPlan} label`).textContent
        data.plan["price"] = document.querySelector(`.${currentSelectedPlan} p`).textContent
    })
    
})

toggleButton.addEventListener("click", function(e) {
    let prices = document.querySelectorAll('.price')
    let regex = /[0-9]/g
    if(e.target.checked) {
        data.plan.cycle = "yearly"
        prices.forEach(price => {
            let number = price.textContent.match(regex)
            price.textContent = `$${number.join("") * 10}/mo`
            data.plan.price = price.textContent
        })
    } else if(e.target.checked == false) {
        data.plan.cycle = "monthly"
        prices.forEach(price => {
            let number = price.textContent.match(regex)
            price.textContent = `$${number.join("") / 10}/mo`
            data.plan.price = price.textContent
        })
    }
})
function validate() {
    let isValid = false
    if(currentX == 0) {
        let inputs = document.querySelectorAll(".personal_form input")
        Array.from(inputs).forEach(input => {
            if(input.value.length == 0) {
                console.log(input, 'is empty')
                //TODO:: add in error
                input.classList.add('error')
                isValid = false
                
            }
        })
    }
    return true
}
function moveTo(x, constraint) {
    if(constraint ) {
        currentX -= x
        console.log("curren",currentX)
        form.style.transform = `translateX(${currentX}px)`
    }
    
}
function createAddon(name, price) {
    let container = document.createElement('div')
    container.classList.add("overview_addons")

    let addOnTitle = document.createElement("p")
    let addOnTitleText = document.createTextNode = name
    addOnTitle.append(addOnTitleText)

    let addOnPrice = document.createElement("p")
    let addOnPriceText = document.createTextNode = price
    addOnPrice.append(addOnPriceText)

    container.append(addOnTitle)
    container.append(addOnPrice)
    return container
}