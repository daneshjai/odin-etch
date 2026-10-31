// Create Container and Calculate Attributes
let container = document.querySelector("#container");
const contentWidth = container.offsetWidth;
const contentArea = contentWidth * contentWidth; // get the area to fill

// Add Button
buttonHolder = document.createElement("div");
buttonHolder.id = "btnDiv";
const btn = document.createElement("button");
btn.textContent = 'Change Grid Items';
buttonHolder.appendChild(btn);
container.before(buttonHolder);


// Add Grid Items
let nGridItems = 16; 
let gridSize = Math.sqrt(contentArea / nGridItems); // get the size of each N square 

for (let index = 0; index < nGridItems; index++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.style.width = gridSize + "px";
    gridItem.style.height = gridSize + "px";
    gridItem.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = 'black';
    })
    container.appendChild(gridItem);    
}