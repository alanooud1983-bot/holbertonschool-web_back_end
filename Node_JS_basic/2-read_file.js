#!/usr/bin/env node
// Import the filesystem module to read files
const fs = require('fs');

function countStudents(path) {
  let data;

  // Try to read the file synchronously
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (error) {
    // Throw error if file cannot be read
    throw new Error('Cannot load the database');
  }

  // Split file into lines
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  // Remove header line
  const students = lines.slice(1);

  // Print total number of students
  console.log(`Number of students: ${students.length}`);

  // Object to group students by field
  const fields = {};

  students.forEach((line) => {
    const parts = line.split(',');

    const firstName = parts[0];
    const field = parts[3];

    // Initialize field if not exists
    if (!fields[field]) {
      fields[field] = [];
    }

    // Add student name to the field
    fields[field].push(firstName);
  });

  // Print results per field
  for (const field in fields) {
    const names = fields[field];
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
    );
  }
}

module.exports = countStudents;
