const { exec } = require('child_process');
exec('pnpm build', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error during build: ${error.message}`);
        return;
    }
    console.log(`Build output: ${stdout}`);
});