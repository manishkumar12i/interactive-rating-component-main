const buttons = document.querySelectorAll(".list__item");
const submit = document.querySelector(".btn__submit");
const rating = document.querySelector(".span__value");
const success = document.querySelector(".success");
const card = document.querySelector(".container");

let value = null;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Reset all buttons and remove selected class
    buttons.forEach((btn) => btn.classList.remove("selected"));
    e.target.classList.add("selected"); // Mark the clicked button as selected
    value = e.target.textContent; // Store the selected value
  });
});

submit.addEventListener("click", () => {
  if (value) {  // Ensure a value is selected before submitting
    rating.textContent = value;
    card.style.display = "none"; 
    success.style.display = "flex"; 
  } else {
    alert("Please select a rating before submitting.");
  }
});
