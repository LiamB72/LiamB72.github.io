const container = document.querySelector(".container")
const CloneContainer = container.cloneNode(true)
CloneContainer.classList.add("duplicate")
container.append(CloneContainer)

container.addEventListener("click", () => {
    container.classList.add("slide", "no-load")
    const rows = container.querySelectorAll(".row")

const lastRow = rows[rows.length - 1]
    lastRow.addEventListener("animationend", () => {
        container.classList.remove("slide")
    })
})
