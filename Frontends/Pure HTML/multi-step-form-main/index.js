
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
        type: "",
        price:"",
        cycle:"",
    }, 
    addons: {
        online: false, 
        storage: false,
        profile: false
    }
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
    if(validate()) {

        if(currentScreen !== 0) {
            backbtn.classList.add("show_btn")
        }
        if(currentScreen == "desktop") {
            if(currentX == -1622) {
                bill_cycle.textContent = data.plan.cycle
                plan_price.textContent = data.plan.price

            }
            if(currentX > -3000) {
                currentX -= (490 + 321)
                // width of element + 321px (gap of container)
                form.style.transform = `translateX(${currentX}px)`
            }
        }
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
            data.addons[e.target.name] = true
        } else {
            e.target.parentElement.parentElement.classList.remove("checked_plan")
            data.addons[e.target.name] = false

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
        document.querySelector(`.${currentSelectedPlan}`).classList.remove('checked_plan')
        this.classList.add('checked_plan')
        currentSelectedPlan = this.classList[this.classList.length - 2]
        
        data.plan["type"] = document.querySelector(`.${currentSelectedPlan} label`).textContent
        data.plan["price"] = document.querySelector(`.${currentSelectedPlan} p`).textContent
    })
    
})

toggleButton.addEventListener("click", function(e) {
    //TODO:: change plan price to yearly || monthly
    if(e.target.checked) {
        data.plan.cycle = "yearly"
    } else {
        data.plan.cycle = "monthly"
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

}