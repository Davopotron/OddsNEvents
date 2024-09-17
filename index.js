// TODO: this file! :)

const numbers = {
  numberBank: [],
  oddNumber: [],
  evenNumber: [],
};

// Sort individual numbers

function sortOne() {
  if (number % 2 === 0) {
    const number = numbers.numberBank.pop();
    numbers.evenNumber.push(number);
  } else {
    numbers.oddNumber.push(number);
  }
}

// Sort all numbers

function sortAll() {
  numbers.numberBank.forEach((number) => {
    if (number % 2 === 0) {
      numbers.evenNumber.push(number);
    } else {
      numbers.oddNumber.push(number);
    }
  });
}

//  === Render ===

// Render nums to numBank

function renderNumberBank() {
  const renderedNumbers = numbers.numberBank.map((number)
=> { 

}
)
 
}

// === Script ===

render();

// When the user clicks the "Add Number" button,
// the number they entered into the input field should be added to the number bank.

const $form = document.querySelector("form");
$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const $numberInput = document.querySelector("#number");
  if (isNaN(number) == false) {
    for (let i = 0; i < $numberInput.value; i++) {
      numbers.numberBank.push(number);
      // This could be numberInput ^
    }
  }
  render();
});

// When the sort 1 buttion is clicked,
// remove first number and sort to odd or even

const $Sort1 = document.querySelector("#sortOne");
$Sort1.addEventListener("click", () => {
  sortOne();

  render();
});

const $SortAll = document.querySelector("#sortAll");
$SortAll.addEventListener("click", () => {
  sortAll();

  render();
});
