function maskEmail(email) {
  // Find position of "@"
  const atIndex = email.indexOf("@");

  // Split into username and domain
  const username = email.slice(0, atIndex);  // before "@"
  const domain = email.slice(atIndex);        // "@" and after

  // Keep first and last char of username
  const first = username[0];
  const last = username[username.length - 1];

  // Fill the middle with asterisks (total length minus the 2 we kept)
  const asterisks = "*".repeat(username.length - 2);

  // Combine: first + stars + last + domain
  return first + asterisks + last + domain;
}

// Declare the email to mask
const email = "apple.pie@example.com";

// Call the function and print the result
console.log(maskEmail(email)); // → "a*******e@example.com"   