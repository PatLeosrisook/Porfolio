
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
var currentSelectedPlan = null
let data = {
    profile : {
        name: "",
        email: "",
        phone:""
    },
    plan: {
        type: "",
        cycle:"",
    }, 
    addons: {
        online_service: false, 
        larger_storage: false,
        customize_profile: false
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
        console.log("hell")
        data.profile[e.target.name] = e.target.value
        console.log(data)
    })
})
button.addEventListener("click", function(){
    // form validation 
    if(validate()) {

        if(currentScreen !== 0) {
            backbtn.classList.add("show_btn")
        }
        if(currentScreen == "desktop") {
            if(currentX > -3000) {
                currentX -= (490 + 321)
                // width of element + 321px (gap of container)
                form.style.transform = `translateX(${currentX}px)`
            }
        }
    }
})
backbtn.addEventListener("click",function() {
    if(currentScreen == "desktop") {
        if(currentX < 0) {
            currentX += (490 + 321)
            form.style.transform = `translateX(${currentX}px)`
        }
    }
})

plans.forEach((plan, index) => {
 
    console.log("eiwojof;")
    if(plan.classList[plan.classList.length - 1] == 'checked_plan') {
        currentSelectedPlan = plan.classList[plan.classList.length - 2]
        console.log(plan.classList, currentSelectedPlan)
    } else  {
        console.log(plan)
    }
    plan.addEventListener('click',function() {
        console.log(currentSelectedPlan,this.classList[this.classList.length - 2])
        document.querySelector(`.${currentSelectedPlan}`).classList.remove('checked_plan')
        this.classList.add('checked_plan')
        currentSelectedPlan = this.classList[this.classList.length - 2]
    })
    
})

toggleButton.addEventListener("click", function(e) {
    console.log("toggle", this,e)
    
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