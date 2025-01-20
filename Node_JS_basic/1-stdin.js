process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
    const name = data.toString().trim(); // Convert input to string and trim whitespace
    console.log(`Your name is: ${name}`);
    process.stdout.write('This important software is now closing\n');
    process.exit(); // Exit the process after displaying the closing message
});

// Handle program exit gracefully
process.on('SIGINT', () => {
    process.stdout.write('\nThis important software is now closing\n');
    process.exit();
});
