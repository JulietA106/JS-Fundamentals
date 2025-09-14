// Get the command-line arguments (excluding "node" and the script name)
const args = process.argv.slice(2);

// Print the two arguments in the format "<arg1> is <arg2>"
console.log(args[0] + " is " + args[1]);
