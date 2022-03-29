const { execSync } = require('child_process');
var version = execSync('npm version patch').toString().trim();
console.log(`Next Version: ${version}`);
