// ------------------
// PART 1: BASICS
// ------------------
let userName = prompt("Enter your name:"); // variable & user input
let age = parseInt(prompt("Enter your age:"));

if (age >= 18) {
  console.log(`${userName}, you are an adult.`);
} else {
  console.log(`${userName}, you are a minor.`);
}

// ------------------
// PART 2: FUNCTIONS
// ------------------
// Function 1: Calculate sum
function calculateSum(a, b) {
  return a + b;
}
console.log("Sum of 5 and 10 is:", calculateSum(5, 10));

// Function 2: Toggle message
function toggleMessage() {
  let messageEl = document.getElementById("message");
  messageEl.textContent =
    messageEl.textContent === "Welcome to my JS page!"
      ? "Message Toggled!"
      : "Welcome to my JS page!";
}

// ------------------
// PART 3: LOOPS
// ------------------
// Loop 1: Display numbers 1-5 in console
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Loop 2: Add items to list dynamically
let fruits = ["Apple", "Banana", "Cherry"];
let listEl = document.getElementById("list");
fruits.forEach((fruit) => {
  let li = document.createElement("li");
  li.textContent = fruit;
  listEl.appendChild(li);
});

// ------------------
// PART 4: DOM INTERACTIONS
// ------------------
document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

document.getElementById("countdownBtn").addEventListener("click", function () {
  let count = 5;
  let interval = setInterval(() => {
    document.getElementById("message").textContent = `Countdown: ${count}`;
    count--;
    if (count < 0) {
      clearInterval(interval);
      document.getElementById("message").textContent = "Countdown Complete!";
    }
  }, 1000);
});
