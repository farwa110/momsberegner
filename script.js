"use strict";

// Global variables
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");
const celebration = document.getElementById("celebration");

// Function to calculate the total with moms (moms = 25%)
function beregnMedBeloeb(beloeb, moms = 25) {
  // return beloeb * (1 + moms / 100);
  const result = beloeb * (1 + moms / 100);
  console.log(`Total beløb inkl. moms: DKK ${result.toFixed(2)}`); // Logs the result
  return result;
}
// Call the function and log the return value
// const testResult = beregnMedBeloeb(500);
// console.log("Returned value:", testResult);

// Listen for clicks on the "Beregn moms" button
guessButton.addEventListener("click", () => {
  const inputValue = parseFloat(guessInput.value);

  // Check if the input is valid
  if (isNaN(inputValue) || inputValue <= 0) {
    message.textContent = "Please enter a valid positive number.";
    celebration.style.display = "none"; // Hide celebration if input is invalid
  } else {
    // Calculate result with moms
    const result = beregnMedBeloeb(inputValue);
    message.textContent = `Totale beløb inklusive moms: DKK ${result.toFixed(2)}`;

    // Show celebration
    celebration.style.display = "block";
    celebration.innerHTML = `
      <div class="money" style="left: 10%;">💵</div>
      <div class="money" style="left: 30%;">💰</div>
      <div class="money" style="left: 50%;">💸</div>
      <div class="money" style="left: 70%;">💴</div>
    `; // Add floating money icons
  }
});
// "use strict";
// const guessInput = document.getElementById("guessInput");
// const guessButton = document.getElementById("guessButton");
// ///step 1: function myFunction(){}
// //beloeb (the amount you want to calculate)
// //moms (the VAT rate)
// function beregnMedBeloeb(beloeb, moms = 25) {
//   //lave en variable af moms regnings formelen
//   const beloebMedMoms = beloeb * (1 + moms / 100);

//   console.log(`beloeb med ${moms}  % moms er i alt:${beloebMedMoms} dk`);
// }
// //beloeb is the amount (for example, 100).
// //moms = 25 means that moms will be 25 by default.

// //Now call the function with a specific value fx 100,150 etc...
// beregnMedBeloeb(500);
