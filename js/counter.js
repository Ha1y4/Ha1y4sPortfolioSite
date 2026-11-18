const orderField = document.querySelector("#client-message")
const bugField = document.querySelector("#bug-message")

const orderCounter = document.querySelector("#order-counter")
const bugCounter = document.querySelector("#bug-counter")

function updateCounter(field, counter, maxLength) {
    counter.textContent = field.value.length + "/" + maxLength;
}

orderField.addEventListener("input", function () {
    updateCounter(orderField, orderCounter, orderField.maxLength)
})
bugField.addEventListener("input", function () {
    updateCounter(bugField, bugCounter, bugField.maxLength)
})

