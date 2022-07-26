let gridCount = 16;
let grid = document.querySelector("#grid-container");
const controls = document.querySelector("#controls");

/*
Non functional reset button :)

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset-button");
resetBtn.textContent = "Reset";
resetBtn.addEventListener("click", () => {
  cell.className = "cell";
});
controls.appendChild(resetBtn); */

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
      //cell.textContent = `${horizontalIndex * gridCount + verticalIndex}`;
      cell.addEventListener("mouseover", () => {
        cell.className = "cell-painted";
      });
      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
}
genDivs();
