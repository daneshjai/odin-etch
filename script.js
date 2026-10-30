// Add Grid Items


let container = document.querySelector("#container");
for (let index = 0; index < 256; index++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = 'black';
    })
    container.appendChild(gridItem);    
}