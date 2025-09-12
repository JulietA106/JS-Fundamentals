// Get the first argument (number of occurrences)
const arg = process.argv[2];

// Convert it to an integer
const count = parseInt(arg, 10);

// Check if count is a valid positive number
if (isNaN(count) || count <= 0) {
  console.log("Missing number of occurrences");
} else {
  // Loop to print "C is fun" count times
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
