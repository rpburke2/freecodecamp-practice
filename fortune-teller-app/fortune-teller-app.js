const fortune1 = "Your semicolon will be forgiven today.";
const fortune2 = "The deploy will go smoothly. Probably.";
const fortune3 = "Be cautious of the bug hiding in your nested loops.";
const fortune4 = "You will discover a new framework soon. You don't need it.";
const fortune5 = "It would be wise to avoid the red squiggly lines today.";

// Math.random() gives [0, 1), so * 5 + floor gives 0–4, +1 shifts to 1–5
const randomNumber = Math.floor(Math.random() * 5) + 1;

let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
} else if (randomNumber === 2) {
  selectedFortune = fortune2;
} else if (randomNumber === 3) {
  selectedFortune = fortune3;
} else if (randomNumber === 4) {
  selectedFortune = fortune4;
} else if (randomNumber === 5) {
  selectedFortune = fortune5;
}

console.log(selectedFortune);   