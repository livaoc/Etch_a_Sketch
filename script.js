let container = document.querySelector(".container");

function createGrid(size) {
    for(let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel1");

        pixel.style.height= `${100/size}%`;
        pixel.style.width= `${100/size}%`;
        pixel.style.border= "1px solid #000";
        pixel.style.backgroundColor= "transparent";
        pixel.style.boxSizing= "border-box";
        container.appendChild(pixel);


        pixel.addEventListener("mouseenter", () => {
            pixel.style.backgroundColor = "white";
        })
    }
}

createGrid(16);

let newGrid = document.querySelector("#createNewGrid");

newGrid.addEventListener('click', () => {
    newSize = Number(prompt("Grid size: "));

    // taking the container variable with the "div container" to clean everything in it
    container.innerHTML = "";

    createGrid(newSize);
}

)

let clearAll = document.querySelector(".clearGrid");
let pixelsSelector = document.querySelectorAll(".pixel1");

clearAll.addEventListener('click', () => {
    pixelsSelector.forEach(pixel => {
        pixel.style.backgroundColor= "transparent";
    })
}
)

