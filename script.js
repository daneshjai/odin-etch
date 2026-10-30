// Add Grid Items
const squareItem = 16;
const squareArea = squareItem * squareItem; // area for a 16x16 square

let container = document.querySelector("#container");
container.style.width = squareArea + "px";
for (let index = 0; index < squareArea; index++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.style.width = squareItem + "px";
    gridItem.style.height = squareItem + "px";
    container.appendChild(gridItem);    
}