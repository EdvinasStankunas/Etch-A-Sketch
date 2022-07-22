let gridCount = 16;
let grid = document.querySelector("#grid-container");

function genDivs() {
  for (let i = 0; i < gridCount; i++) {
    let column = document.createElement("div");
    column.classList.add("colum");
    for (let x = 1; x <= gridCount; x++) {
      let cell = document.createElement("div");
      cell.classList.add("square");
      cell.textContent = `${i * gridCount + x}`;
      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
}
genDivs();
