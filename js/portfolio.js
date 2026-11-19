const categories = document.querySelectorAll(".portfolio-category")
const categoryArray = Array.from(categories)

const buttons = document.querySelectorAll('[data-filter]')

function filterProjects(category) {
    const hasCategory = categoryArray.some(function (ctgry) {
        return ctgry.dataset.category === category;
    });
    categoryArray.forEach(function (ctgry) {
        if (hasCategory) {
            if (ctgry.dataset.category !== category) {
                ctgry.hidden = true;
            } else {
                ctgry.hidden = false;
            }
        } else {
            ctgry.hidden = false;
        }
    })

    buttons.forEach(function (button) {
        if (hasCategory) {
            if (button.dataset.filter === category) {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        } else {
            if (button.dataset.filter === "all") {
                button.classList.add("active");
            } else {
                button.classList.remove("active");
            }
        }
    });
}

const params = new URLSearchParams(window.location.search)
console.log(params.get("category"))

filterProjects(params.get("category"))

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        filterProjects(button.dataset.filter)
    })
})
