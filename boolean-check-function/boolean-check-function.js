function booWho(arg) {
  // typeof returns "boolean" only for the primitives true and false
  return typeof arg === "boolean";
}

console.log(booWho(true));       // true
console.log(booWho(false));      // true
console.log(booWho([1, 2, 3]));  // false
console.log(booWho("true"));     // false
console.log(booWho(1));          // false   