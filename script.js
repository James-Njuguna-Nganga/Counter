document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const start = document.getElementById("start");
  const buttons = document.querySelectorAll(".main-btn");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const action = e.currentTarget.dataset.action;

      if (action === "decrease") {
        count--;
      } else if (action === "increase") {
        count++;
      } else if (action === "reset") {
        count = 0;
      }

      updateDisplay();
    });
  });

  function updateDisplay() {
    start.textContent = count;
    start.style.color = count > 0 ? "green" : count < 0 ? "red" : "#222";
  }
});
