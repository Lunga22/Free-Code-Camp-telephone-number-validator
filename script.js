// Define the regex pattern for a valid US phone number
const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

// Get references to the DOM elements
const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Check button click event
checkBtn.addEventListener("click", () => {
  const input = userInput.value.trim();

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = phoneRegex.test(input);
  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${input}`;
    resultsDiv.style.color = "green";
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
    resultsDiv.style.color = "red";
  }
});

// Clear button click event
clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
  userInput.value = "";
});
