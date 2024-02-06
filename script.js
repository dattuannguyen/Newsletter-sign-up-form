
const subscribe_btn = document.querySelector("button")
let emailInput = document.getElementById("email");
const active_state = document.querySelector(".active-state")
const success_state = document.querySelector(".success-state")
let email_success = document.getElementById("input-email")
const error_mess = document.getElementById("error-message")
const dismiss_btn = document.getElementById("dismiss_message")


subscribe_btn.addEventListener("click",()=>{

    // Get the value of the input field
    let emailValue = emailInput.value;
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailValue.match(validRegex)){
        console.log("email value",emailValue)
        email_success.textContent = emailValue;
        active_state.classList.add("hidden");
        success_state.classList.remove("hidden")
    }
    else {
        // console.log("email invalue")
        emailInput.classList.add("error");
        error_mess.classList.remove("hidden")
    }
})

dismiss_btn.addEventListener("click",()=>{
    location.reload();
})
