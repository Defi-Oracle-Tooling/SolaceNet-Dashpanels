const { exec } = require('child_process');
exec('pnpm run deploy', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error during deployment: ${error.message}`);
        return;
    }
    console.log(`Deployment output: ${stdout}`);
});