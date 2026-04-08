#!/usr/bin/env node

// Import the filesystem module to read files
const fs = require('fs');

/**
 * countStudents - Reads a CSV file and prints student statistics
 * @param {string} path - The path to the database file
 */
function countStudents(path) {
  let data;

  // Attempt to read the file synchronously
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    // Throw an error if file cannot be read
    throw new Error('Cannot load the database');
  }

  // Split file content into lines and remove empty lines
  const lines = data.split('\n').filter((line) => line !== '');

  // Remove the header line
  const students = lines.slice(1);

  // Print total number of students
  console.log(`Number of students: ${students.length}`);

  // Object to group students by their field
  const fields = {};

  students.forEach((student) => {
    const record = student.split(',');
    const firstName = record[0];
    const field = record[3];

    // Initialize array for the field if it doesn't exist
    if (!fields[field]) {
      fields[field] = [];
    }

    // Add student first name to the field group
    fields[field].push(firstName);
  });

  // Print the number of students and list for each field
  for (const field in fields) {
    if (Object.prototype.hasOwnProperty.call(fields, field)) {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
      );
    }
  }
}

// Export the function for use in other files
module.exports = countStudents;
