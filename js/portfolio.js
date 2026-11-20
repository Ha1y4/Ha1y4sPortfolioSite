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



const sourceButtons = document.querySelectorAll(".show-source-btn");

sourceButtons.forEach(function (button) {
    const projectCard = button.closest(".portfolio-project");
    const projectId = projectCard.dataset.projectId;
    const sourceContainer = projectCard.querySelector(".source-container");

    sourceContainer.id = `source-${projectId}`;
    button.setAttribute("aria-controls", sourceContainer.id);
    button.setAttribute("aria-expanded", "false");

    button.addEventListener("click", function () {
        const openVideo = sourceContainer.querySelector("video");
        if (openVideo) {
            openVideo.pause();
            sourceContainer.replaceChildren();
            button.textContent = "Показать исходник";
            button.setAttribute("aria-expanded", "false");
            return;
        }

        const source = sourceVideos.find(item => item.projectId === projectId);
        if (!source) return;

        const title = document.createElement("p");
        title.className = "source-title";
        title.id = `source-title-${projectId}`;
        title.textContent = source.title;

        const sourceVideo = document.createElement("video");
        sourceVideo.className = "source-video";
        sourceVideo.src = `video/${source.video}`;
        sourceVideo.controls = true;
        sourceVideo.playsInline = true;
        sourceVideo.preload = "metadata";
        sourceVideo.setAttribute("aria-labelledby", title.id);

        sourceContainer.append(title, sourceVideo);
        button.textContent = "Скрыть исходник";
        button.setAttribute("aria-expanded", "true");
    });
});
