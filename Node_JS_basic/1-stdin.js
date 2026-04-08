// Print welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// When program ends (EOF)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
