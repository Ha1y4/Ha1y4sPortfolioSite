const modal = document.querySelector("#video-modal")

const closeButton = document.querySelector("#close-modal")

const placeHolders = document.querySelectorAll(".video-placeholder")

const video = document.querySelector("#modal-video")

placeHolders.forEach(function (placeHolder) {
    placeHolder.addEventListener("click", function () {
        video.src = "video/demo.mp4"
        modal.showModal()
    })

})

closeButton.addEventListener("click", function () {
    modal.close()
})