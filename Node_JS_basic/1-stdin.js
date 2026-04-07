// Print the welcome message to STDOUT
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
  // Convert input buffer to string and remove newline
  const name = data.toString().trim();

  // Print the user's name
  process.stdout.write(`Your name is: ${name}\n`);
});

// Listen for the end of input (EOF)
process.stdin.on('end', () => {
  // Print closing message when input stream ends
  process.stdout.write('This important software is now closing\n');
});
