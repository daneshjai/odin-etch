// Constants
const maxGridSize = 100;
let isActiveColorToggle = false;

// Create Container and Get Width
let container = document.querySelector("#container");
const contentWidth = container.offsetWidth;


// Add Grid Generator Button
function addGridButton(btn) {    
    btn.addEventListener("click", () =>
        {
            do {
                userGridSize = parseInt(prompt("Enter a number between 1 and 100", 16));
                
            } while (userGridSize > maxGridSize 
                & userGridSize > 0);
            
            container.replaceChildren();
            makeGrid(userGridSize);

        });
    btn.textContent = 'Change Grid Items';
}

function addColorToggle(btn) {
    btn.textContent = 'Color Change OFF'; // off by default
    btn.id = "toggleBtn";

    btn.addEventListener("click", () => {
        isActiveColorToggle = btn.classList.toggle('active');
        console.log(isActiveColorToggle);
        btn.textContent = isActiveColorToggle ? 'Color Change ON' : 'Color Change OFF';

    })
}

function addButton(buttonFunction) {
    buttonHolder = document.createElement("div");
    const btn = document.createElement("button");
    buttonHolder.classList.add( "btnHolder");
    buttonFunction(btn);
    buttonHolder.appendChild(btn);
    container.before(buttonHolder);

}

// function that makes the grid based on an input size
function makeGrid(size){
    // Add Grid Items
    let nGridItems = size * size; // number of items in the grid to fill space
    let gridSize = contentWidth / size // l and w of the smaller grid

    for (let index = 0; index < nGridItems; index++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.width = gridSize + "px";
        gridItem.style.height = gridSize + "px";
        gridItem.addEventListener("mouseover", (event) => {
            if (!isActiveColorToggle) {
                event.target.style.backgroundColor = "#555555";
            } 
            else {
                // randomize color
                let rbgString = event.target.style.backgroundColor;
                // set random colors between 50 and 100 to avoid using black
                let r =  Math.floor(Math.random() * (100 - 50 + 1)) + 50;
                let g =  Math.floor(Math.random() * (100 - 50 + 1)) + 50;
                let b =  Math.floor(Math.random() * (100 - 50 + 1)) + 50;

                const match = rbgString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/i);
                let a = 99; // so that rbga can show up in string to parse
                if (match?.[4] !== undefined) {
                    // decrease alpha by 10 until it reaches transparent i.e., 0
                    a = parseFloat(match[4]) * 100 - 10 > 0 ? 100* parseFloat(match[4]) - 10 : 0;
                }
                event.target.style.backgroundColor = `rgb(${r}% ${g}% ${b}% / ${a}%)`;
            }
        })
        container.appendChild(gridItem);    
    }
}

addButton(addGridButton);
addButton(addColorToggle);
makeGrid(16);