const grid = document.querySelector("#grid")
const resizeButton = document.querySelector("button.grid-size")
const clearButton = document.querySelector("button.clear-grid")
let mouseDown = false
grid.addEventListener("mousedown", () => mouseDown = true, {
    capture: true
})
document.addEventListener("mouseup", () => mouseDown = false)

function hoverOver() {
    if (!mouseDown) return;
    this.classList.add("hover")
}

function createGrid(width, height) {
    grid.textContent = ""
    for (let y = 0; y < height; y++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let x = 0; x < width; x++) {
            const gridPiece = document.createElement("div")
            gridPiece.classList.add("grid-piece")
            gridPiece.addEventListener("mouseover",hoverOver)
            gridPiece.addEventListener("mousedown", hoverOver)
            row.appendChild(gridPiece)
        }
        grid.appendChild(row)
    }
}

function promptGrid() {
    const newSize = prompt("Enter a new grid size! (1-100)")

    if (typeof +newSize == "number" && newSize > 0 && newSize <= 100) {
        createGrid(newSize, newSize)
    }
}

function clearGrid() {
    const gridPieces = document.querySelectorAll(".grid-piece")
    gridPieces.forEach(gridPiece => {
        gridPiece.classList.remove("hover")
    })
}

resizeButton.addEventListener("click", promptGrid)
clearButton.addEventListener("click", clearGrid)

createGrid(16, 16)

