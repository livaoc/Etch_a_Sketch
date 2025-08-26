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
            let r = Math.floor(Math.random() * 176) + 80;
            let g = Math.floor(Math.random() * 176) + 80;
            let b = Math.floor(Math.random() * 176) + 80;
            //let color = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
            pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            //let opacity = parseFloat(pixel.style.opacity) || 0;
            //let opacityHover = Math.min(opacity + 0.2, 1);

            //pixel.style.opacity = opacityHover;

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

