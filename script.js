const grid = document.querySelector("#grid")

function createGrid(width, height) {
    for (let y = 0; y < height; y++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let x = 0; x < width; x++) {
            const gridPiece = document.createElement("div")
            gridPiece.classList.add("grid-piece")
            row.appendChild(gridPiece)
        }
        grid.appendChild(row)
    }
}

createGrid(16, 16)
