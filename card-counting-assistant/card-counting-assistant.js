let count = 0;

function cardCounter(card) {
  if ([2, 3, 4, 5, 6].includes(card)) {
    count++;
  } else if ([10, "J", "Q", "K", "A"].includes(card)) {
    count--;
  }
  // 7, 8, 9 → do nothing

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}