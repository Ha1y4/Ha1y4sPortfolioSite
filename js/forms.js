const bugForm = document.querySelector("#bug-form")
const bugErrors = document.querySelector("#bug-error")

const emailField = document.querySelector("#bug-email")

const msgIsEmpty = "Поле пустое!"
const invalidEmail = "Некорректная почта"
const checkPassed = "Форма отправлена!"

bugForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (bugField.value.trim().length < 1) {
        bugErrors.textContent = msgIsEmpty
    } else if (emailField.validity.typeMismatch) {
        bugErrors.textContent = invalidEmail
    }
    else {
        bugErrors.textContent = checkPassed
    }
})

