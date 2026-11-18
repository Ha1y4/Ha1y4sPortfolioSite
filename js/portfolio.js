const categories = document.querySelectorAll(".portfolio-category")

const buttons = document.querySelectorAll('[data-filter]')

buttons.forEach(function (button) {
    button.classList.remove("active")
    button.addEventListener("click", function () {
        categories.forEach(function (categoryy) {
            if (button.dataset.filter === "all") {
                categoryy.hidden = false
            } else if (button.dataset.filter === categoryy.dataset.category){
                categoryy.hidden = false
            } else {
                categoryy.hidden = true
            }
        })
    })
})