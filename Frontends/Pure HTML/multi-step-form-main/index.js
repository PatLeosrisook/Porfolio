
var slideon = new Slideon()
slideon.load()

var steps = document.querySelectorAll('.step_no')
var button = document.querySelector('#nav_btn')
var backbtn = document.querySelector("#form_nav p")
var form = document.querySelector("form")
var toggleButton = document.querySelector('.slideon')
var plans = document.querySelectorAll(".input_container .checkbox")
var profile_inputs = document.querySelectorAll('.personal input')
var addons_checkboxes = document.querySelectorAll('.addons_checkbox input')

var bill_cycle = document.querySelector("#bill_cycle")
var plan_price = document.querySelector("#overview_price")
var addons_container = document.querySelector(".addons_overview")
var changePlan = document.querySelector(".change_plan")
var currentX = 0;
var currentSelectedPlan = null
var isLoaded = false
var data = {
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
var screenOffset = 0
var currentScreen = null
var hiddenScreen = null
window.onload = function() {
    
    if(window.innerWidth > 900) {
        currentScreen = "desktop"
    } else{
        currentScreen = 'mobile'
    }
    isLoaded = true
}


profile_inputs.forEach(profile => {
    profile.addEventListener("change", function(e){
        data.profile[e.target.name] = e.target.value
    })
})
changePlan.addEventListener('click',function() {
    let currentHighlight = getHighlighPos()
    if(currentScreen == "desktop") {
        form.style.transform = `translateX(-811px)`
        currentX = -811
    } else {
        form.style.transform = `translateX(-480px)`
        currentX = -480
    }
    moveStepFrom(currentHighlight, 1)
})
button.addEventListener("click", function(){
    // form validation 
    let valid = false 
    let screenLimit = 0
    
    if(currentScreen == "desktop") {
        screenOffset = (490 + 321)
        screenLimit = -3243
    } else {
        screenOffset = (310 + 170)
        screenLimit = -1919
    }
    if(currentX == 0 ) { 
        // Validate first  
        let inputs = document.querySelectorAll(".personal_form input")
        
        Array.from(inputs).forEach(input => {
            if(input.value.length == 0) {
                //TODO:: add in error
                input.classList.add('error')
                //add in error message above input
                document.querySelector(`.${input.name}_error`).classList.add("error_message")
                valid =  false;  
                
            } else {
                document.querySelector(`.${input.name}_error`).classList.remove("error_message")
                input.classList.remove('error')
                valid = true
            }
        })
        if(valid) {
            moveStepFrom(0,1)
            moveTo(screenOffset, currentX > screenLimit)
            backbtn.classList.add("show_btn")
        }

    } else if(currentX == "-811" || currentX == Number("-480")) {
        valid = false // reset to false at new section
        //show back button
        plans.forEach(plan => {
            
                if(plan.classList.contains("checked_plan")) {
                    valid = true
                }
        })
        if(valid) {
            moveStepFrom(1,2)
            moveTo(screenOffset, currentX > screenLimit)
        }
    } else if(currentX == -1622  || currentX == -960) {
        let sumPrice = 0;
        data.addons.forEach( add => {
            sumPrice += Number(add.price.match(/[0-9]/g).join(""))
        })
        sumPrice += Number(data.plan.price.match(/[0-9]/g).join(""))
        let totalCycle = document.querySelector("#total_cycle")
        let totalPrice = document.querySelector("#total")
        totalCycle.textContent = data.plan.cycle
        totalPrice.textContent = (data.plan.cycle == "monthly") ? `$${sumPrice}/mo` : `$${sumPrice}/yr`
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
        
        moveStepFrom(2,3)
        moveTo(screenOffset, currentX > -4000)
    } else  {
        moveTo(screenOffset, currentX > screenLimit)
    }
})

backbtn.addEventListener("click",function() {
    let currentHighLightPos = getHighlighPos()
    if(currentX == -811 || currentX == -480) {
        // page before last, remove back button
        backbtn.classList.remove('show_btn')
    }
    if(currentScreen == "desktop") {

        if(currentX >  -3244  ) {
            //only remove highlight when the page is within to form, excluding the thank you page.
            moveStepFrom(currentHighLightPos, currentHighLightPos - 1)
        } 
    } else {

        if(currentX > -1920) {
            moveStepFrom(currentHighLightPos, currentHighLightPos - 1)
    
        }
    }
    if(currentX < 0) {
        currentX += screenOffset
        form.style.transform = `translateX(${currentX}px)`
    }
})
addons_checkboxes.forEach(add =>{
    add.addEventListener('click', function(e) {
        if(e.target.checked) {
            //add border highlight
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
                }
            })
           
        }
    })
})
plans.forEach((plan, index) => {
    if(plan.classList[plan.classList.length - 1] == 'checked_plan') {
        currentSelectedPlan = plan.classList[plan.classList.length - 2]
    } else  {
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
    let addon_price =document.querySelectorAll(".addon_price")
    let prices = document.querySelectorAll('.price')
    let discounts = document.querySelectorAll('.free_discount')
    let regex = /[0-9]/g
    if(e.target.checked) {
        data.plan.cycle = "yearly"
        prices.forEach(price => {
            let number = price.textContent.match(regex)
            price.textContent = `$${number.join("") * 10}/yr`
            data.plan.price = price.textContent
        })
        discounts.forEach(discount => {
            discount.classList.add('visible_discount')
        })
        addon_price.forEach(add => {
            let number = add.textContent.match(regex)
            add.textContent = `+$${number.join("") * 10}/yr`
        })
    } else if(e.target.checked == false) {
        data.plan.cycle = "monthly"
        prices.forEach(price => {
            let number = price.textContent.match(regex)
            price.textContent = `$${number.join("") / 10}/mo`
            data.plan.price = price.textContent
        })
        discounts.forEach(discount => {
            discount.classList.remove('visible_discount')
        })
    }
})


//Functions 
function moveStepFrom(from, to) {
    steps[from].classList.remove("current")
    steps[to].classList.add("current")
}
function moveTo(x, constraint) {

    if(constraint ) {
        currentX -= x
        form.style.transform = `translateX(${currentX}px)`
    }
    return currentX
}
function createAddon(name, price) {
    //create outer container
    let container = document.createElement('div')
    container.classList.add("overview_addons")
    //create text describing addons.
    let addOnTitle = document.createElement("p")
    let addOnTitleText = document.createTextNode = name
    addOnTitle.append(addOnTitleText)

    //create price tag
    let addOnPrice = document.createElement("p")
    let addOnPriceText = document.createTextNode = price
    addOnPrice.append(addOnPriceText)

    container.append(addOnTitle)
    container.append(addOnPrice)
    return container
}
function getHighlighPos() {
    //get position of the highlighted step number
    let at = 0;
    Array.from(steps).forEach((step, index) => {
        if(step.classList.contains("current")) {
            at = index
        }
    })
    return at
}