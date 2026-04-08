#!/usr/bin/env node
// Print welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

// Listen for the end of input
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
