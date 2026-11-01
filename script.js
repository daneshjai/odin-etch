// Constants
const maxGridSize = 100;

// Create Container and Calculate Attributes
let container = document.querySelector("#container");
const contentWidth = container.offsetWidth;


// Add Button
buttonHolder = document.createElement("div");
buttonHolder.id = "btnDiv";
const btn = document.createElement("button");
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
buttonHolder.appendChild(btn);
container.before(buttonHolder);

// function that makes the grid based on an input size
function makeGrid(size){
    // Add Grid Items
    let nGridItems = size * size; // number of items in the grid to fill space
    let gridSize = contentWidth / size // l and w of the smaller grid
    console.log("Number of Items: ", nGridItems);
    console.log("Grid Length and Width: ", gridSize);

    for (let index = 0; index < nGridItems; index++) {
        let gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.width = gridSize + "px";
        gridItem.style.height = gridSize + "px";
        gridItem.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = '#555555';
        })
        container.appendChild(gridItem);    
    }
}

makeGrid(16);