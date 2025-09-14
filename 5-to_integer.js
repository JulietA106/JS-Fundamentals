// Get the first argument (excluding "node" and the script name)
const arg = process.argv[2];

// Convert the argument to an integer using parseInt
const num = parseInt(arg, 10);

// Check if the conversion resulted in a valid number
if (!isNaN(num)) {
  console.log("My number: " + num);
} else {
  console.log("Not a number");
}
