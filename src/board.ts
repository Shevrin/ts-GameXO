const SQUARES_NUMBER: number = 900;
const board = document.querySelector("#gamecsene");
const colors: Array<string> = [
  "#CD0074",
  "#992667",
  "#85004B",
  "#A60000",
  "#BF3030",
  "#FF4040",
  "#FF7373",
  "#E667AF",
  "#E6399B",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  board!.append(square);
}

function setColor(element: HTMLElement) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}`;
}

function removeColor(element: HTMLElement) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
