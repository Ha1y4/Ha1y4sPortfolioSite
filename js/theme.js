console.log("js вроде робит")

const button = document.querySelector("#theme-button");

const savedTheme = localStorage.getItem("theme")

if (savedTheme === "light") {
    document.body.classList.add("light-theme")
}

button.addEventListener("click", function () {

    console.log("Переключили тему");

    if (localStorage.getItem("theme") === "dark" || localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light")
    } else {
        localStorage.setItem("theme", "dark")
    }
    document.body.classList.toggle("light-theme");
})