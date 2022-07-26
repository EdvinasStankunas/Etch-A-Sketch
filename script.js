let gridCount = 16;
let grid = document.querySelector("#grid-container");
const controls = document.querySelector("#controls");

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset-button");
resetBtn.textContent = "Reset";
resetBtn.addEventListener("click", () => {
  let child = grid.lastElementChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastElementChild;
  }
  genDivs();
});

controls.appendChild(resetBtn);

const gridCountBtn = document.querySelector("#resize-btn");
gridCountBtn.textContent = "Resize ";
gridCountBtn.addEventListener("click", userInput);

function userInput() {
  gridCount = Number(prompt("Enter size value"));
  if (isNaN(gridCount) || gridCount < 16 || gridCount > 100) {
    alert("Error: value must be a number between 16 and 100");
    return;
  }
  let child = grid.lastElementChild;
  while (child) {
    grid.removeChild(child);
    child = grid.lastElementChild;
  }
  genDivs();
}

function genDivs() {
  for (
    let horizontalIndex = 0;
    horizontalIndex < gridCount;
    horizontalIndex++
  ) {
    let column = document.createElement("div");
    column.classList.add("column");

    for (let verticalIndex = 0; verticalIndex < gridCount; verticalIndex++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      //cell.textContent = `${horizontalIndex * gridCount + verticalIndex + 1}`;
      cell.addEventListener("mouseover", () => {
        cell.className = "cell-painted";
      });
      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
}
genDivs();
