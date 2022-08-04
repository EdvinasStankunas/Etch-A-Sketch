let gridCount = 16;
let grid = document.querySelector("#grid-container");
const controls = document.querySelector("#controls");

const rgbBtn = document.createElement("button");
rgbBtn.classList.add("rgb-button");
rgbBtn.textContent = "RAINBOW MODE!1!";
rgbBtn.addEventListener("click", () => {
  let child = grid.lastElementChild;

  while (child) {
    grid.removeChild(child);

    child = grid.lastElementChild;
  }
  rgbDivs();
});

controls.appendChild(rgbBtn);

const shadeBtn = document.createElement("button");
shadeBtn.classList.add("shade-button");
shadeBtn.textContent = "Shade mode";
shadeBtn.addEventListener("click", () => {
  let child = grid.lastElementChild;

  while (child) {
    grid.removeChild(child);

    child = grid.lastElementChild;
  }
  shadeDivs();
});

controls.appendChild(shadeBtn);

const resetBtn = document.createElement("button");
resetBtn.classList.add("reset-button");
resetBtn.textContent = "Reset";
resetBtn.addEventListener("click", () => {
  let cell = grid.lastElementChild;
  while (cell) {
    grid.removeChild(cell);

    cell = grid.lastElementChild;
  }
  genDivs();
});

controls.appendChild(resetBtn);

const gridCountBtn = document.querySelector("#resize-btn");
gridCountBtn.textContent = "Resize ";
gridCountBtn.addEventListener("click", userInput);

function userInput() {
  gridCount = Number(prompt("Enter size value between 16 and 100"));

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

      cell.addEventListener("mouseover", () => {
        cell.setAttribute("style", "background: black");
      });

      column.appendChild(cell);
    }

    grid.appendChild(column);
  }
}

function rgbDivs() {
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

      cell.addEventListener("mouseover", () => {
        const randomBetween = (min, max) =>
          min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;

        cell.setAttribute("style", `background: ${rgb}`);
      });

      column.appendChild(cell);
    }

    grid.appendChild(column);
  }
}

function shadeDivs() {
  for (
    let horizontalIndex = 0;
    horizontalIndex < gridCount;
    horizontalIndex++
  ) {
    let column = document.createElement("div");

    column.classList.add("column");

    for (let verticalIndex = 0; verticalIndex < gridCount; verticalIndex++) {
      let cell = document.createElement("div");
      let shade = 0;

      cell.classList.add("cell");
      cell.addEventListener("mouseover", () => {
        if (shade < 1) {
          shade += 0.1;
          cell.setAttribute("style", `background: rgba(0, 0, 0, ${shade})`);
        }
      });
      column.appendChild(cell);
    }
    grid.appendChild(column);
  }
}

genDivs();
