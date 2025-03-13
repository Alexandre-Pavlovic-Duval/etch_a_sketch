// Creation of the main div
const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
document.body.appendChild(mainDiv);

// Creation of the displaying div
const contentDiv = document.createElement("div");
contentDiv.classList.add("contentDiv");
mainDiv.appendChild(contentDiv);

// Creation of the button container
const containerButton = document.createElement("div");
containerButton.classList.add("containerButton");
contentDiv.appendChild(containerButton);

// Creation of the button
const choiceButton = document.createElement("button");
choiceButton.innerText = "Choose your grid";
choiceButton.classList.add("choiceButton");
containerButton.appendChild(choiceButton);

// Creation of the grid
const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
contentDiv.append(gridDiv);

const buttonChoiceGrid = document.querySelector(".choiceButton");

const handleSize = (sizeChoosed) => {

    gridDiv.innerHTML = "";

    // Square grid made
    for (let i = 0; i < sizeChoosed * sizeChoosed; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");

        // Definition of the grids' style
        grid.style.height = `${100 / sizeChoosed}%`;
        grid.style.width = `${100 / sizeChoosed}%`;

        // Adding the mouseover
        grid.addEventListener("mouseover", () => {
            grid.classList.add("black");
        });

        gridDiv.appendChild(grid);
    }
};

// Prompt to choose the size
buttonChoiceGrid.addEventListener("click", () => {
    let size = prompt("Choose your grid size");
    size = parseInt(size);
    handleSize(size);
});