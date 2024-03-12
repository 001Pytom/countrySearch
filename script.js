"use strict";
const globeContainer = document.querySelector(".globe_container");
const totalCountryNum = document.querySelector(".countries_length");
const containing = document.querySelector(".containing");
const startingwrdbtn = document.querySelector(".starting_word");
const anywordbtn = document.querySelector(".any_word");
const restart = document.querySelector(".arrow");
const input = document.querySelector("input");
const arrowDirection = document.querySelector(".direction");
const countryContainer = document.createElement("div");
const countryChildCountainer = document.createElement("div");
const inputLetter = document.querySelector(".letter");
const lengthOfInput = document.querySelector(".number_letter");
countryContainer.classList.add("country_container");
let inputValue = input.value.toLowerCase();

// get countries length and display
const countryLength = countries.length;
totalCountryNum.textContent = countryLength;

// Get the number of countryChildCountainer element
let getCounts = () => {
  const countryChildCount = countryContainer.querySelectorAll(
    ".country_child_container"
  ).length;
  // Display the number
  lengthOfInput.textContent = countryChildCount;
  containing.style.display = "block";
};

// function to create and add country child div
let displayCountry = (country) => {
  const countryChildCountainer = document.createElement("div");
  countryChildCountainer.textContent = country;
  countryChildCountainer.classList.add("country_child_container");
  countryContainer.appendChild(countryChildCountainer);
};
// call it on the window
countries.forEach((country) => {
  displayCountry(country);
});

// button to  reset
restart.addEventListener("click", () => {
  countryContainer.innerHTML = "";
  arrowDirection.classList.toggle("fa-arrow-down");
  arrowDirection.classList.toggle("fa-arrow-up");
  countries.forEach((country) => {
    displayCountry(country);
  });
});

// all  woks only when user input a value
// event listenr
input.addEventListener("input", () => {
  countryContainer.innerHTML = "";
  inputValue = input.value.toLowerCase();
  inputLetter.textContent = inputValue;
  if (inputValue === "") {
    return;
  }

  //   function to serch for first word
  let displayFirstWord = () => {
    countryContainer.innerHTML = "";
    countries.forEach((country) => {
      let word = country.toLowerCase();
      let startWith = word.startsWith(inputValue);
      if (startWith) {
        displayCountry(country);
      }
      // Exit the loop if a match is found
      return;
    });
  };

  //   function to serch any
  let displayAllSearch = () => {
    countries.forEach((country) => {
      let searchLetters = inputValue.split("");
      let word = country.toLowerCase();
      let containesAllLetters = searchLetters.every((letter) =>
        word.includes(letter)
      );
      if (containesAllLetters) {
        displayCountry(country);
      }
      // Exit the loop if a match is found
      return;
    });
  };
  // trigger btn
  startingwrdbtn.addEventListener("click", () => {
    displayFirstWord();
    startingwrdbtn.style.backgroundColor = "darkslateblue";
    anywordbtn.style.backgroundColor = "blueviolet";
    // Update the count
    getCounts();
  });

  anywordbtn.addEventListener("click", (e) => {
    countryContainer.innerHTML = "";
    displayAllSearch();
    anywordbtn.style.backgroundColor = "darkslateblue";
    startingwrdbtn.style.backgroundColor = "blueviolet";
    // Update the count
    getCounts();
  });

  displayAllSearch();
});

globeContainer.insertAdjacentElement("afterend", countryContainer);
