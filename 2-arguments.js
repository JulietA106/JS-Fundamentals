// Get the command-line arguments (excluding "node" and the script name)
const args = process.argv.slice(2);

// Check number of arguments and print the message
if (args.length === 0) {
  console.log("No argument");
} else if (args.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
