
const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const counter = document.querySelector(".counter");

// CONFIG (rules)
const CONFIG = {
  min: 0,
  max: 10,
  start: 5,
  baseWidth: 200,
  Min_Width: 50,
  step: 30,
};

// STATE
let count = CONFIG.start;

// RENDER (single UI updater)
function render() {
  counter.textContent = count;

  const delta = count - CONFIG.start;

  const incrWidth = CONFIG.baseWidth + delta * CONFIG.step;
  const dcrWidth = CONFIG.baseWidth - delta * CONFIG.step;

  increment.style.maxWidth = `${Math.max(incrWidth, CONFIG.Min_Width)}px`;
  decrement.style.maxWidth = `${Math.max(dcrWidth, CONFIG.Min_Width)}px`;

  increment.style.opacity = count <= CONFIG.min ? "0" : "1";
  decrement.style.opacity = count >= CONFIG.max ? "0" : "1";
}

// EVENTS
increment.addEventListener("click", () => {
  if (count >= CONFIG.max) return;
  count++;
  render();
});

decrement.addEventListener("click", () => {
  if (count <= CONFIG.min) return;
  count--;
  render();
});

counter.addEventListener("click", () => {
  count = CONFIG.start;
  render();
});

// INITIAL RENDER
render();
