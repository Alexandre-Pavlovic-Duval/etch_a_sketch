const mainDiv = document.createElement("div");
mainDiv.classList.add("mainDiv");
document.body.appendChild(mainDiv);

const contentDiv = document.createElement("div");
contentDiv.classList.add("contentDiv");
mainDiv.appendChild(contentDiv);

const containerButton = document.createElement("div");
containerButton.classList.add("containerButton");
contentDiv.appendChild(containerButton);

const choiceButton = document.createElement("button");
choiceButton.innerText = "Choose your grid";
choiceButton.classList.add("choiceButton");
containerButton.appendChild(choiceButton);

const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
contentDiv.append(gridDiv);

for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridDiv.appendChild(grid);
}

const gridElements = document.querySelectorAll(".grid");

gridElements.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.classList.add("black");
    });
});

const buttonChoiceGrid = document.querySelector(".choiceButton");

const handleSize = (sizeChoosed) => {
    document.getElementsByClassName("grid").style.height = sizeChoosed / 100;
    document.getElementsByClassName("grid").style.width = sizeChoosed / 100;
};

buttonChoiceGrid.addEventListener("click", () => {
    let size = prompt("Choose your grid size");
    handleSize(size);
});

// Vérifier que size ne soit pas un float ou un  texte (qu'il soit onvetible en int)
// sinon reprompt
