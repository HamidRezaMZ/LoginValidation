let form = document.querySelector("form")
let userName = document.querySelector("#username")
let password = document.querySelector("#password")
let seePassword = document.querySelector("#see-password")

let userPattern = /^[a-zA-Z][\w._]{5,25}$/


form.addEventListener("submit", evt => {
    if (!(evaluateUserName && evaluatePassword === 5)){
        evt.preventDefault();

        if (!evaluateUserName){
            form.UserName.classList.add("is-invalid")
        }
        if (evaluateUserName !== 5){
            form.Password.classList.add("is-invalid")
        }
    }
})

let evaluateUserName = false;


form.UserName.addEventListener("keyup", evt => {
    if (evt.target.value) {
        userName.textContent = evt.target.value
        if (userPattern.test(evt.target.value)) {
            evaluateUserName = true;
            evt.target.classList.add("is-valid")
            evt.target.classList.remove("is-invalid")
        } else {
            evt.target.classList.add("is-invalid")
            evaluateUserName = false;
        }
    } else {
        userName.innerHTML = '<i>Please Write Something</i>'
    }
})

let evaluatePassword = 0;


form.Password.addEventListener("keyup", evt => {
    if (evt.target.value) {
        password.textContent = "*".repeat(evt.target.value.length)
        seePassword.textContent = evt.target.value
        evaluatePassword = 0;
        evaluatePassword += /[A-Z]/.test(evt.target.value) ? 1 : 0;
        evaluatePassword += /[a-z]/.test(evt.target.value) ? 1 : 0;
        evaluatePassword += /[0-9]/.test(evt.target.value) ? 1 : 0;
        evaluatePassword += /[\W]/.test(evt.target.value) ? 1 : 0;
        evaluatePassword += evt.target.value.length >= 8 ? 1 : 0;

        console.log(evaluatePassword);

        if (evaluatePassword === 5) {
            evt.target.classList.add("is-valid")
            evt.target.classList.remove("is-invalid")
        } else {
            evt.target.classList.add("is-invalid")
        }
    } else {
        password.innerHTML = '<i>Please Select A Something</i>'
        seePassword.innerHTML = '<i>Please Select A Something</i>'
    }
})
