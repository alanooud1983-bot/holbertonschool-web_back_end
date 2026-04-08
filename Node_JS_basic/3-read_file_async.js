#!/usr/bin/env node

// Import filesystem module
const fs = require('fs');

/**
 * countStudents - Reads CSV file asynchronously and prints stats
 * @param {string} path - Path to the database file
 * @returns {Promise<void>}
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Read file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        // Reject promise if file cannot be read
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split content into lines and remove empty lines
      const lines = data.split('\n').filter((line) => line !== '');

      // Remove header
      const students = lines.slice(1);

      // Print total number of students
      console.log(`Number of students: ${students.length}`);

      const fields = {};

      students.forEach((student) => {
        const record = student.split(',');
        const firstName = record[0];
        const field = record[3];

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstName);
      });

      // Print each field
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(
            `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
          );
        }
      }

      // Resolve the promise
      resolve();
    });
  });
}

module.exports = countStudents;
