let container = document.querySelector(".container");

let blackPen = document.querySelector(".blackPen");
let multicolorPen = document.querySelector(".coloredPen");
let eraser = document.querySelector(".eraser");
let chooseColor = document.querySelector(".chooseColor");
let currentColor = null;

let tool = blackPen;


blackPen.addEventListener("click", () => {
    tool = blackPen;
})

multicolorPen.addEventListener("click", () => {
    tool = multicolorPen;
})

chooseColor.addEventListener("click", () => {
        let userColor = prompt("Type the hexa code for your color, including #. \n Example: #ffffff");
        userColor = userColor.toLowerCase().trim();

        let colorValidation = /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(userColor);
        
        if (colorValidation) {
            currentColor = userColor;
            tool = "color";
        } else {
            alert("Invalid color. Please use the right format (#RRGGBB).");
        }
})

eraser.addEventListener("click", () => {
    tool = eraser;
})

function createGrid(size) {
    for(let i = 0; i < size * size; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel1");

        pixel.style.height= `${100/size}%`;
        pixel.style.width= `${100/size}%`;
        pixel.style.border= "1px solid #1a1a1a";
        pixel.style.backgroundColor= "transparent";
        pixel.style.boxSizing= "border-box";
        container.appendChild(pixel);


        pixel.addEventListener("mouseenter", () => {
            if (tool === multicolorPen) {
                let r = Math.floor(Math.random() * 176) + 80;
                let g = Math.floor(Math.random() * 176) + 80;
                let b = Math.floor(Math.random() * 176) + 80;
                //let color = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
                pixel.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                //let opacity = parseFloat(pixel.style.opacity) || 0;
                //let opacityHover = Math.min(opacity + 0.2, 1);
                //pixel.style.opacity = opacityHover;
            } else if (tool === blackPen ){
                pixel.style.backgroundColor =  `#000000`;
            } else if (tool === eraser) {
                pixel.style.backgroundColor = "transparent";
            } else if (tool === "color") {
                pixel.style.backgroundColor = currentColor;
            }

        })
    }
}

createGrid(16);

let newGrid = document.querySelector("#createNewGrid");

newGrid.addEventListener('click', () => {
    newSize = Number(prompt("Grid size (choose a number between 16 and 100): "));
    if(newSize >= 16 && newSize <= 100) {
        // taking the container variable with the "div container" to clean everything in it
        container.innerHTML = "";
        createGrid(newSize);
    } else {
        alert("Invalid. Please type a valid number.");
    }    
}

)

let clearAll = document.querySelector(".clearGrid");
let pixelsSelector = document.querySelectorAll(".pixel1");

clearAll.addEventListener('click', () => {
    pixelsSelector = document.querySelectorAll(".pixel1");
    pixelsSelector.forEach(pixel => {
        pixel.style.backgroundColor= "transparent";
    })
}
)

