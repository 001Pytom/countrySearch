let cl = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
];

const input = document.querySelector("input");
const btn2 = document.querySelector(".firstword");
const anyword = document.querySelector(".anyword");
let inputValue = input.value.toLowerCase();

input.addEventListener("input", () => {
  const container = document.querySelector("ul");
  // Convert input value to lowercase for case-insensitive comparison
  inputValue = input.value.toLowerCase();

  if (inputValue === "") {
    return;
  }
  container.innerHTML = "";

  //function to serch first word
  let serchFirstWord = () => {
    container.innerHTML = "";
    cl.forEach((c) => {
      let word = c.toLowerCase();
      let tt = word.startsWith(inputValue);
      if (tt) {
        const li = document.createElement("li");
        li.textContent = c;
        container.appendChild(li);
      }
      // Exit the loop if a match is found
      return;
    });
  };
  //
  // function to serch any
  let serchany = () => {
    cl.forEach((c) => {
      let searchLetters = inputValue.split("");
      let word = c.toLowerCase();

      let containesAllLetters = searchLetters.every((letter) =>
        word.includes(letter)
      );
      if (containesAllLetters) {
        const li = document.createElement("li");
        li.textContent = c;
        container.appendChild(li);
      }
      return;
    });
  };

  btn2.addEventListener("click", () => {
    serchFirstWord();
  });

  anyword.addEventListener("click", (e) => {
    container.innerHTML = "";
    serchany();
  });
  serchany();
});
