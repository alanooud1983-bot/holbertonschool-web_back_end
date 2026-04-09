#!/usr/bin/env node

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file content synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split into lines and remove empty ones
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    // Remove the header line
    const students = lines.slice(1);

    // Total number of valid students
    console.log(`Number of students: ${students.length}`);

    // Object to group students by field
    const fields = {};

    // Process each student line
    for (const line of students) {
      const parts = line.split(',');
      const firstname = parts[0];
      const field = parts[3];

      // Initialize field array if not exists
      if (!fields[field]) fields[field] = [];

      // Add student name to the field list
      fields[field].push(firstname);
    }

    // Print results for each field
    for (const field in fields) {
      const list = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
    }
  } catch (err) {
    // Throw error if file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
