#!/usr/bin/env node

// Print welcome message to the user
process.stdout.write("Welcome to Holberton School, what is your name?\n");

// Listen for user input from stdin
process.stdin.on("data", (data) => {
  // Convert input to string and remove extra spaces/newlines
  const name = data.toString().trim();

  // Print the user's name
  process.stdout.write(`Your name is: ${name}\n`);
});

// Triggered when stdin ends (e.g., when using pipe)
process.stdin.on("end", () => {
  // Final message before program closes
  console.log("This important software is now closing");
});
