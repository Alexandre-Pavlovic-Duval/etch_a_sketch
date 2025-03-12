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
containerButton.appendChild(choiceButton);

const gridDiv = document.createElement("div");
gridDiv.classList.add("gridDiv");
contentDiv.append(gridDiv);

for (let i = 0; i < 16; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    gridDiv.appendChild(grid);
}